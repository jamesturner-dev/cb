<template>

  <div class="w-full">
    <div class="mx-auto w-full max-w-lg rounded-2xl mt-10 p-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Can I get this code?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Yes, you can get the code for this site at
            <a class="text-purple-700" href="https://github.com/jamesturner-dev/cb">
              the github repository.</a> If you just want a directory of your own you can
            sign up for <a class="text-purple-700" href="http://localhost:5173/user/register">a free account</a> and get
            started right away.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Do you offer technical support?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5"> Sure. I do consulting for BTC. You can
            <a href="#" class="text-purple-700">click here</a> to book a session with me. I can help you with your
            project, or just answer questions about the code.
          </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>

</template>

<script setup>
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const help = [
  {
    question: "What is your refund policy?",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    question: "Do you offer technical support?",
    answer: "Did you try turning it off and back on again?"
  }
]; 
</script>
