<template>
  <div id="header" class="w-full lg:py-3 py-4 flex border-b bg-kgpf-blue-900 font-serif bg-[url('~/assets/svg/header.svg')] bg-clip-padding">
    <div id="navbar" class="mx-auto flex lg:flex-row items-center gap-2 flex-col">
      <ULink to="/" class="lg:mr-10">
        <NavItem class="text-3xl">
          <template #shifts>
            <span class="text-kgpf-yellow-500">KG</span>
          </template>
          <span class="text-white">PF</span>
        </NavItem>
      </ULink>
      <div class="lg:flex lg:gap-y-8 grid grid-cols-2 gap-y-2 gap-8 tracking-wider">
        <div class="lg:block hidden">
          <UDropdown
            :items="SERVICE_ITEMS"
            :ui="{ width: 'w-auto', item: { base: 'hover:text-gray-900' } }"
            mode="hover"
          >
            <ULink to="/services">
              <NavItem class="gap-1">
                <template #shifts>
                  <UIcon name="i-heroicons-building-library-solid" />
                </template>
                <span>Services</span>
              </NavItem>
            </ULink>
          </UDropdown>
        </div>
        <div class="lg:hidden block">
          <ULink to="/services">
            <NavItem class="gap-1">
              <template #shifts>
                <UIcon name="i-heroicons-building-library-solid" />
              </template>
              <span>Services</span>
            </NavItem>
          </ULink>
        </div>
        <ULink to="/owners/faq">
          <NavItem class="gap-1">
            <template #shifts>
              <UIcon name="i-heroicons-home-solid" />
            </template>
            <span>Owner FAQ</span>
          </NavItem>
        </ULink>
        <ULink to="/glossary">
          <NavItem class="gap-1">
            <template #shifts>
              <UIcon name="i-heroicons-book-open-solid" />
            </template>
            <span>Glossary</span>
          </NavItem>
        </ULink>
        <ULink to="/leadership">
          <NavItem class="gap-1">
            <template #shifts>
              <UIcon name="i-heroicons-users-solid" />
            </template>
            <span>Leadership</span>
          </NavItem>
        </ULink>
        <ULink to="/contact">
          <NavItem class="gap-1">
            <template #shifts>
              <UIcon name="i-heroicons-envelope-solid" />
            </template>
            <span>Contact Us</span>
          </NavItem>
        </ULink>
      </div>
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
      icon: 'i-heroicons-magnifying-glass',
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
      icon: 'i-heroicons-banknotes',
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
