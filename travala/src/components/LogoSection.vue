<script setup>
    import CompanyLogo from './CompanyLogo.vue'
</script>
    
<template>
    <section class="logo-section">
        <CompanyLogo path="images/company-logo-axon.png" />
        <CompanyLogo path="images/company-logo-jetstar.png" />
        <CompanyLogo path="images/company-logo-expedia.png" />
        <CompanyLogo path="images/company-logo-qantas.png" />
        <CompanyLogo path="images/company-logo-alitalia.png" />
    </section>
</template>

<style lang="scss">
    @use "@/sass/components/logo-section.scss";
</style>