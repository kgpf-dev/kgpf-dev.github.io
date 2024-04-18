<template>
  <div id="header" class="w-full flex justify-center bg-kgpf-blue-900 bg-[url('~/assets/svg/header.svg')] bg-clip-padding">
    <div id="navbar" class="m-4 lg:flex grid grid-cols-2 items-center gap-x-6 gap-y-2 tracking-wider">
      <ULink to="/" class="lg:mr-6">
        <LogoSmall class="lg:flex hidden" />
        <NavItem class="lg:hidden block">
          <template #shifts>
            <UIcon name="i-heroicons-home-16-solid" />
          </template>
          Home
        </NavItem>
      </ULink>
      <!-- <ULink to="/" class="lg:mr-6"> -->
      <!--   <NavItem class="lg:text-3xl"> -->
      <!--     <template #shifts> -->
      <!--       <span class="lg:block hidden text-kgpf-yellow-500">KG</span> -->
      <!--       <UIcon name="lg:hidden i-heroicons-home-16-solid" /> -->
      <!--     </template> -->
      <!--     <span class="lg:block hidden text-white">PF</span> -->
      <!--     <span class="lg:hidden">Home</span> -->
      <!--   </NavItem> -->
      <!-- </ULink> -->
      <UDropdown
        :items="SERVICE_ITEMS"
        :ui="{ width: 'w-auto', item: { base: 'hover:text-gray-900' } }"
        mode="hover"
        class="lg:block hidden"
      >
        <ULink to="/services">
          <NavItem class="gap-1">
            <template #shifts>
              <UIcon name="i-heroicons-building-library-16-solid" />
            </template>
            <span>Services</span>
          </NavItem>
        </ULink>
      </UDropdown>
      <ULink class="lg:hidden" to="/services">
        <NavItem class="gap-1">
          <template #shifts>
            <UIcon name="i-heroicons-building-library-16-solid" />
          </template>
          <span>Services</span>
        </NavItem>
      </ULink>
      <ULink to="/owners/faq">
        <NavItem class="gap-1">
          <template #shifts>
            <UIcon name="i-heroicons-chat-bubble-left-right-16-solid" />
          </template>
          <span>Owner FAQ</span>
        </NavItem>
      </ULink>
      <ULink to="/glossary">
        <NavItem class="gap-1">
          <template #shifts>
            <UIcon name="i-heroicons-book-open-16-solid" />
          </template>
          <span>Glossary</span>
        </NavItem>
      </ULink>
      <ULink to="/leadership">
        <NavItem class="gap-1">
          <template #shifts>
            <UIcon name="i-heroicons-trophy-16-solid" />
          </template>
          <span>Leadership</span>
        </NavItem>
      </ULink>
      <ULink to="/contact">
        <NavItem class="gap-1">
          <template #shifts>
            <UIcon name="i-heroicons-envelope-16-solid" />
          </template>
          <span>Contact Us</span>
        </NavItem>
      </ULink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const SERVICE_ITEMS = [
  [
    {
      label: 'Special District Services',
      to: '/services/special-districts',
      icon: 'i-heroicons-building-library',
    },
  ],
  [
    {
      label: 'Developer Fee Studies',
      to: '/services/fee-studies',
      icon: 'i-heroicons-wrench-screwdriver',
    },
  ],
  [
    {
      label: 'Ongoing Reporting',
      to: '/services/ongoing-reporting',
      icon: 'i-heroicons-calendar-days',
    },
  ],
  [
    {
      label: 'GIS Services',
      to: '/services/gis',
      icon: 'i-heroicons-globe-americas',
    },
  ],
  [
    {
      label: 'Arbitrage Compliance',
      to: '/services/arbitrage-compliance',
      icon: 'i-heroicons-scale',
    },
  ],
  [
    {
      label: 'Proposition 218 Notification',
      to: '/services/prop-218-notification',
      icon: 'i-heroicons-bell-alert',
    },
  ],
]
</script>
