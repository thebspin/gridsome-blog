<template>
  <header class="bg-blue-900">
      <div class="container mx-auto flex justify-between items-center py-4">
        <div class="flex-shrink-0 ml-10">
          <g-link to="/">
            <i class="fas fa-drafting-compass fa-2x text-orange-500"></i>
            <span class="ml-1 text-3xl text-white font-semibold">bspin</span>
          </g-link>
        </div>
        <i class="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200"></i>
        <ul class="hidden md:flex overflow-x-hidden mr-10 font-semibold">
          <li class="mr-6 p-1 border-b-2 border-orange-500">
            <g-link class="text-blue-200 cursor-pointer" to="/">Home</g-link>
          </li>
          <li class="mr-6 p-1">
            <g-link class="text-white hover:text-blue-300 cursor-pointer" to="/">Projects</g-link>
          </li>
          <li class="mr-6 p-1">
            <g-link class="text-white hover:text-blue-300 cursor-pointer" to="/">Articles</g-link>
          </li>
          <li class="mr-6 p-1">
            <g-link class="text-white hover:text-blue-300 cursor-pointer" to="/">About</g-link>
          </li>
          <li class="mr-6 p-1">
            <g-link class="text-white hover:text-blue-300 cursor-pointer" to="/">Contact</g-link>
          </li>
        </ul>
      </div>
    </header>
</template>