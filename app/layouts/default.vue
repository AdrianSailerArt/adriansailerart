<template>
    <div>
        <a href="#main-content" class="skip-link">Zum Inhalt springen</a>

        <NavBar />

        <main id="main-content" tabindex="-1" class="pt-large outline-none">
            <slot />
        </main>
        <Footer />

        <BackToTop />
    </div>
</template>
