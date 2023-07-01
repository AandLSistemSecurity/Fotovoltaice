<template>
  <div id="acasa">
    <div class="home-bg">
      <div class="img-object"></div>
      <div class="filter-object"></div>
      <div class="home-content">
        <div class="home-logo">
          <img src="../assets/img/sun.svg" />
          <h2>Fotovoltaice</h2>
          <h3>Ongrid</h3>
        </div>
        <h1>Lăsați Soarele să vă plătească facturile!</h1>
        <h3>
          Treceți la solar și începeți să câștigați bani din excesul de energie!
        </h3>
  
        <div class="home-box-container">
          <div class="home-box">
            <h2>Alege instalatia potrivita pentru tine!</h2>
            <p>
              Poti alege tipul de instalatie care se potriveste nevoilor tale. De
              la instalatii complet on grid pana la instalatii de tipul hibrid sau
              chiar off grid.
            </p>
            <img src="../assets/img/energy.svg" />
            <a href="#oferte"><Button>Mai multe informatii</Button></a>
          </div>
          <div class="home-box">
            <h2>Contactati-ne pentru o oferta estimativa.</h2>
            <p>
              Ne poti contacta pentru o oferta estimative prin intermediul
              formularului de mai jos. Daca ai nelamurir sau intrebari nu ezita sa
              ne contactezi pe social media sau mail!
            </p>
            <img src="../assets/img/mail.svg" />
            <a href="#contact"><Button>Solicita o oferta estimativa</Button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "primevue/button";
</script>
<style lang="scss">
.home-bg {
  width: 100%;
  height: 100vh;
  position: relative;
}

.img-object {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/bill-mead-wmaP3Tl80ww-unsplash.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  z-index: -1;
}

.filter-object {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: -1;
  top: 0;
}

.home-content {
  width: 60%;
  height: 100%;
  padding: 3rem 0;
  margin: auto;
  color: var(--light);
  text-align: center;
  h1 {
    margin-top: 3rem;
  }
}

.home-logo {
  width: fit-content;
  margin: auto;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  img {
    width: 100px;
  }
  h2,
  h3 {
    font-weight: bold;
    color: var(--light-accent);
    margin: 0;
  }
  h2 {
    font-size: 2.5rem;
  }
}

.home-box-container {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem;
  gap: 5rem;
  img {
    width: 80px;
  }
  a{
    text-decoration: none;
    width: 100%;
  }
}

.home-box {
  width: 400px;
  height: 400px;
  border: 1px solid var(--success);
  color: var(--light-accent);
  border-radius: 10px;
  padding: 0 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  p {
    color: var(--light);
  }
  h2 {
    margin-bottom: 0;
  }
  .p-button {
    background: var(--main);
    border: 1px solid var(--main);
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  .p-button:enabled:hover {
    background: var(--light);
    border: 1px solid var(--light);
    color: var(--main);
  }
}

@media screen and (max-width: 1366px) {
  .home-bg {
    height: fit-content;
  }
  .home-content{
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .home-bg {
    height: fit-content;
    background: var(--main);
  }

  .img-object{
    display: none;
  }
  .filter-object{
    opacity: 0.5;
  }
  
}
</style>