<template>
  <n-el class="mx-auto w-sm" :style="{ fontFamily: 'var(--font-family)' }">
    <n-card id="contact-us" title="Send us a message">
      <n-form ref="formRef" :model="formModel" :rules="rules" :disabled="sent">
        <n-space vertical>
          <n-form-item label="Name" path="name">
            <n-input
              v-model:value="formModel.name"
              placeholder="John Smith"
            />
          </n-form-item>
          <n-form-item label="Email" path="email">
            <n-auto-complete
              v-model:value="formModel.email"
              placeholder="john.smith@google.come"
              :options="emailOptions"
            />
          </n-form-item>
          <n-form-item label="Phone number" path="phone" :show-feelback="false">
            <n-input
              v-model:value="formModel.phone"
              placeholder="200-867-5309"
            />
          </n-form-item>
          <n-form-item label="Your message" path="message">
            <n-input
              v-model:value="formModel.message"
              type="textarea"
              placeholder=""
            />
          </n-form-item>
          <n-button type="primary" :disabled="sent" @click="onSend">
            Send
          </n-button>
        </n-space>
      </n-form>
    </n-card>
  </n-el>
</template>
<script lang="ts">
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'

// TODO:
//
// Figure out static site email sending
// https://coderwall.com/p/mq684g/how-to-add-a-contact-form-to-a-static-website-in-2-minutes
// https://dev.to/darnocer/quickly-configure-a-contact-form-on-a-static-site-4d14
// https://www.emailjs.com/docs/examples/vuejs/
//
// Captcha?
// https://dansnow.github.io/vue-recaptcha/guide

const COMMON_EMAIL_SUFFIXES = [
  '@gmail.com',
  '@yahoo.com',
]

const rules = {
  name: {
    required: true,
    message: 'Please input your name',
    trigger: 'blur',
  },
  email: {
    required: true,
    message: 'Please input your email',
    trigger: 'blur',
  },
  phone: {
    required: false,
  },
  message: {
    required: true,
    message: 'Please input your message',
    trigger: 'blur',
  },
}
</script>
<script lang="ts" setup>
const message = useMessage()
const formRef = ref<FormInst | null>(null)
const formModel = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})
const sent = ref(false)

const emailOptions = computed(() => COMMON_EMAIL_SUFFIXES
  .map((suffix) => {
    const prefix = formModel.value.email.split('@')[0]
    const value = prefix + suffix
    return { label: value, value }
  }))

function onSend (e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Message sent!')
      sent.value = true
      console.log(formModel.value)
    }
  })
}
</script>
