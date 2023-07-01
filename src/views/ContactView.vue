<template>
  <div id="contact" class="contact">
    <h1>Contact</h1>
    <div class="contact-container">
      <div class="contact-info">
        <div>Ai intrebari sau nelamuriri?</div>
        <div>Nu ezita sa ne contactezi!</div>
        <table>
          <tr>
            <td class="svg-td">
              <svg-icon class="contact-icon" :iconPath="Icons.mailIcon" />
            </td>
            <td>office@alarmevideo.com</td>
          </tr>
          <br>
          <tr>
            <td class="svg-td"><svg-icon class="contact-icon" :iconPath="Icons.phoneIcon" /></td>
            <td>074 123 456</td>
          </tr>
          <br>
          <tr>
            <td class="svg-td"><svg-icon class="contact-icon" :iconPath="Icons.facebookIcon" /></td>
            <td>Facebook</td>
          </tr>
        </table>
      </div>
      <div class="contact-form-container">
        <ContactForm />
      </div>
    </div>
  </div>
</template>
<script setup>
import Icons from "../assets/modules/Icons.js";
import ContactForm from "../components/ContactForm.vue";
import SvgIcon from "../components/SvgIcon.vue";
</script>
<style lang="scss">
.contact {
  width: 60%;
  margin: auto;
  color: var(--main);
  padding: 3rem 0;
  h1 {
    margin-bottom: 5rem;
  }
}

.contact-container {
  display: flex;
}

.contact-info {
  font-size: 2rem;
}

.contact-info table{
    font-size: 1.3rem;
    margin-top: 5rem;
}

.svg-td{
    display: flex;
    align-items: center;
    margin-right: 1rem;
}
.contact-icon {
  width: 40px;
  fill: var(--SUCCESS);
}

@media screen and (max-width: 1024px) {
  .contact {
    width: 100%;
    h1{
      text-align: center;
    }
  }

  .contact-info{
    font-size: 1.5rem;
  }

  .contact-container{
    flex-flow: column;
    align-items: center;
  }
  
}
</style>