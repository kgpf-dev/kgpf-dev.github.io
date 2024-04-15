<template>
  <UCard>
    <div class="space-y-4">
      <UForm
        id="contact-form"
        :schema="schema"
        :validate="validate"
        :state="state"
        :validate-on="['blur', 'change', 'submit']"
        class="space-y-4 md:min-w-96"
        @submit="onSubmit"
      >
        <UFormGroup label="Name" name="name" required>
          <UInput v-model="state.name" :disabled="disabled" placeholder="Benjamin Button" />
        </UFormGroup>
        <UFormGroup label="Your message" name="message" required>
          <UTextarea v-model="state.message" :disabled="disabled" placeholder="..." resize />
        </UFormGroup>
        <div class="sm:grid sm:grid-cols-2 sm:gap-4 contents">
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" :disabled="disabled" icon="i-heroicons-envelope" placeholder="you@example.com" />
          </UFormGroup>
          <UFormGroup label="Phone number" name="phone_number">
            <UInput v-model="state.phone_number" :disabled="disabled" icon="i-heroicons-device-phone-mobile" placeholder="555 123 4567" />
          </UFormGroup>
        </div>
        <UFormGroup label="Preferred method of contact">
          <URadioGroup
            v-model="state.preferred_contact"
            :options="PREFERRED_CONTACT"
            :disabled="preferredContactDisabled"
            :ui="{ fieldset: 'flex items-center gap-4' }"
            :ui-radio="{ wrapper: 'items-center' }"
          />
        </UFormGroup>
        <hr>
        <UButton :disabled="disabled" label="Send Message" type="submit" />
      </UForm>
    </div>
  </UCard>
</template>

<script lang="ts">
/** Contact form using emailjs.
  *
  * Variables for emailjs (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY) are configured through nuxt.config.ts.
  *
  * https://dashboard.emailjs.com/admin
  * https://www.emailjs.com/docs/sdk/send/
  */
import { send as sendEmail } from '@emailjs/browser'
import { z } from 'zod'
import { match } from 'ts-pattern'
import type { FormError, FormSubmitEvent, Notification } from '#ui/types'

const PREFERRED_CONTACT = ['Either', 'Email', 'Phone number'] as const satisfies string[]

const PreferredContact = z.enum(PREFERRED_CONTACT)

/** Template data schema.
 *
 * Corresponds to an emailjs form with the following expected structure:
 * ```html
 * <p>New website message from:</p>
 * <ul>
 *   <li>Name: {{name}}</li>
 *   <li>Email: <a href="{{email}}">{{email}}</a></li>
 *   <li>Phone: <a href="tel:{{phone_number}}">{{phone_number}}</a></li>
 *   <li>Preferred: {{preferred_contact}}</li>
 * </ul>
 * <p>Message:</p>
 * <blockquote>
 *   {{message}}
 * </blockquote>
 * ```
 */
const schema = z.object({
  name: z.string().min(1, 'Name cannot be empty.'),
  message: z.string().min(1, 'Message cannot be empty.'),
  email: z.string().email('Invalid email').optional(),
  phone_number: z.string().optional(),
  preferred_contact: PreferredContact,
}).refine(
  data => (!!data.email || !!data.phone_number),
  'Please provide an email or phone number.',
)

type Schema = z.output<typeof schema>

const validate = (state: any): FormError[] => {
  const res = schema.safeParse(state)
  if (!res.success) {
    // eslint-disable-next-line no-console
    console.error(res.error)
    for (const e of res.error.issues) {
      if (e.code === 'custom') {
        return [
          { path: 'email', message: 'Please provide an email and/or phone number.' },
          { path: 'phone_number', message: 'Please provide an email and/or phone number.' },
        ]
      }
    }
  }
  return []
}

const DEBUG: boolean = (
  // true
  false
) satisfies boolean as boolean

const DEBUG_DEFAULT_STATE = {
  name: 'Nils',
  message: 'My message.',
  email: 'nilso@enosis.net',
}

const DEBUG_SEND_TIMEOUT = 250

type DebugSendResult = 'random' | 'success' | 'failure'

const DEBUG_SEND_RESULT = (
  'random'
  // 'success'
  // 'failure'
) satisfies DebugSendResult as DebugSendResult

const DEBUG_SUBMIT_REENABLE = (
  true
  // false
) satisfies boolean as boolean

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
</script>

<script lang="ts" setup>
const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = useRuntimeConfig().public
const toast = useToast()

const sendMessage = async (state: Schema): Promise<boolean> => {
  if (DEBUG) {
    return await sleep(DEBUG_SEND_TIMEOUT).then(() => {
      return match(DEBUG_SEND_RESULT)
        .with('random', () => Math.random() < 0.5)
        .with('success', () => true)
        .with('failure', () => false)
        .exhaustive()
    })
  } else {
    return await sendEmail(
      SERVICE_ID,
      TEMPLATE_ID,
      state,
      { publicKey: PUBLIC_KEY },
    ).then(
      () => true,
      () => false,
    )
  }
}

const disabled = ref(false)

const state = reactive<Partial<Schema>>({
  name: undefined,
  message: undefined,
  email: undefined,
  phone_number: undefined,
  preferred_contact: PreferredContact.enum.Either,
  ...(DEBUG && DEBUG_DEFAULT_STATE),
})

if (DEBUG) {
  state.name = 'Nils'
  state.message = 'My message.'
  state.email = 'nilso@enosis.net'
}

const preferredContactDisabled = computed(() => disabled.value || (!(state.email && state.phone_number)))

const onSubmit = async (event: FormSubmitEvent<Schema>): Promise<void> => {
  const success = await sendMessage(event.data)
  const notification: Partial<Notification> = success
    ? {
        title: 'Message sent.',
        description: 'Refresh this page if you would like to send another message.',
        color: 'green',
        icon: 'i-heroicons-envelope',
      }
    : {
        title: 'Critical: Failure to send message.',
        color: 'red',
        icon: 'i-heroicons-bug-ant',
      }
  if (DEBUG_SUBMIT_REENABLE) {
    notification.callback = () => { disabled.value = false }
  }
  toast.add(notification)
  disabled.value = true
}
</script>
