import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error('Missing Svix headers:', {
      svix_id,
      svix_timestamp,
      svix_signature,
    });
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  const body = await req.text();

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new Response('Error: Verification error', {
      status: 400,
    });
  }

  if (evt.type === 'user.created') {
    const user = evt.data;
    try {
      await prisma.user.create({
        data: {
          clerkId: user.id,
          name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
          email: user.email_addresses[0]?.email_address || '',
        },
      });
      console.log('User added to database:', user.id);
    } catch (err) {
      console.error('Error adding user to database:', err);
      return new Response('Error: Database operation failed', { status: 500 });
    }
  }

  return new Response('Webhook handled successfully', { status: 200 });
}