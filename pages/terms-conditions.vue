<template>
<section class="terms-conditions">
    <div class="terms-conditions__container container">
      <h1 class="terms-conditions__title">Умови використання сайту</h1>
      <div class="terms-conditions__text text">Ласкаво просимо на сайт Smart care. Перш ніж почати користуватись нашими
        послугами та ресурсами, будь ласка, ознайомтесь із наступними умовами, які регулюють використання даного сайту.
        Користуючись нашим сайтом, ви погоджуєтесь дотримуватись цих умов повністю. Якщо ви не згодні з умовами, будь
        ласка, припиніть використання сайту.</div>
      <div class="terms-conditions__info">
        <h2>1. Авторські права</h2>
        <p>Весь контент, представлений на сайті Smart Care, включаючи текст, зображення, відео, логотипи та графіку, є власністю Smart Care або наших партнерів і захищений авторським правом.
          <br>
          <br>
          Заборонено копіювання, редагування, розповсюдження чи використання контенту без письмової згоди власників прав.</p>
      </div>
      <div class="terms-conditions__info">
        <h2>2. Користування послугами</h2>
        <p>Сайт Smart Care надає інформацію та послуги з встановлення систем розумного будинку. Ми прагнемо забезпечити
          точність та актуальність інформації, але не несемо відповідальності за будь-які помилки або неточності, які можуть з'явитись на сайті.</p>
        <div class="terms-conditions__sub-info">
          <h3>2.1 Використання особистої інформації</h3>
          <p>Ми поважаємо вашу приватність. Користування сайтом підпадає під нашу Політику конфіденційності, яка регулює збір, використання та зберігання особистої інформації.
            <br>
            <br>
            Будь ласка, ознайомтесь з Політикою конфіденційності, щоб детальніше ознайомитись із нашим підходом до обробки даних.</p>
        </div>
        <div class="terms-conditions__sub-info">
          <h3>2.2 Заборона незаконної діяльності</h3>
          <p>Користувачі зобов'язані не здійснювати незаконні дії на сайті Smart Care, включаючи, але не обмежуючись,
            спам, вторгнення в приватні системи, пошкодження програмного забезпечення чи спроби несанкціонованого доступу до даних.</p>
        </div>
      </div>
      <div class="terms-conditions__info">
        <h2>3. Зміни умов</h2>
        <p>Smart Care залишає за собою право в будь-який час змінити умови використання без попередження. Нові умови
          набувають чинності з моменту публікації на сайті, тому рекомендуємо регулярно переглядати цю сторінку, щоб бути в курсі всіх змін.</p>
      </div>
      <div class="terms-conditions__info">
        <h2>4. Відмова від відповідальності</h2>
        <p>Smart Care не несе відповідальності за будь-які прямі чи непрямі збитки, що виникли внаслідок використання або нездатності використовувати наш сайт чи послуги.</p>
      </div>
      <div class="terms-conditions__info">
        <p>Дякуємо за увагу до наших умов використання. Якщо у вас є питання або потреба у додатковій інформації, будь ласка, зв'яжіться з нашою підтримкою.</p>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'TermsConditions',

  components: {

  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.terms-conditions {
  padding-top: 116px;

  @media only screen and (min-width: 760px) {
    padding-top: 160px;
  }

  @media only screen and (min-width: 1160px) {
    padding: 190px 0;
  }
}

.terms-conditions__container {

  @media only screen and (min-width: 1160px) {
    max-width: 826px;
  }
}

.terms-conditions__title {
  font-size: 22px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.22px;
  color: $white;
  margin-bottom: 16px;
}

.terms-conditions__text {
  font-size: 15px;
  margin-bottom: 32px;
}

.terms-conditions__info {

  h2 {
    font-size: 19px;
    font-weight: 700;
    line-height: 150%;
    color: $white;
    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    line-height: 160%;
    color: $dark-500;
    margin-bottom: 32px;
  }

  .terms-conditions__sub-info {

    h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 155%;
      color: $white;
      margin-bottom: 16px;
    }
  }
}
</style>