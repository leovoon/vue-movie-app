<template>
  <nav>
    <Logo />
    <div class="menu">
      <DarkToggle />
      <MessageToggle />
      <GithubButton />
    </div>
  </nav>
  <main>
    <router-view />
  </main>
  <Footer />
</template>
