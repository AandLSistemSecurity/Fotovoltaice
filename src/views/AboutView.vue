<template>
    <div id="despre" class="about">
        <h1>Despre noi</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio voluptate, porro dolorum accusantium ipsa illum sint sed. Odio sunt at asperiores obcaecati, rerum deleniti voluptatibus minima officiis sint soluta exercitationem.
            <img class="about-img-power" src="../assets/img/undraw_energy.svg">
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quos omnis, optio repellat neque illo distinctio quia harum qui quidem reiciendis laborum consectetur numquam vel maiores temporibus cumque iure veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora porro assumenda voluptate quisquam provident illum ipsum, numquam consectetur aliquid officiis, tenetur cupiditate sapiente aliquam iusto reiciendis rem maxime nemo! Eius.
            <img class="about-img-sun" src="../assets/img/undraw_sun.svg">
        </p>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.about {
    width: 60%;
    margin: auto;
    height: 80vh;
    text-align: center;
    color:var(--main);
    position: relative;
    h1{
        margin-bottom: 2rem;
    }
    p{
        width: 50%;
        margin: auto;
        margin-top: 2rem;
        font-size: 1.4rem;
    }

    .about-img-power{
        width: 40%;
        position: absolute;
        top: -15%;
        right: -15%;
    }

    .about-img-sun{
        position: absolute;
        width: 30%;
        left: -10%;
        bottom: 15%;
    }
}

@media screen and (max-width: 1024px) {
    .about-img-power, .about-img-sun{
        display: none;
    }
    .about{
        width: 100%;
        p{
            width: 90%;
            font-size: 1rem;
        }
    }
}
</style>