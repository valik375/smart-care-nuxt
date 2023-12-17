<template>
  <section class="blog-details">
    <div class="blog-details__container container">
      <div class="blog-details__body">
        <component
          v-for="(template, index) in currentPost"
          :key="index"
          :is="template.template"
          :section="template"
        />
      </div>

      <div class="blog-details__content">
        <div class="blog-details__contact card">
          <div class="blog-details__contact-title">Ми робимо розумні будинки під ключ у Києві</div>
          <button class="blog-details__button button blue consultation" type="button">
            <span>Замовити послугу</span>
          </button>
          <div class="blog-details__text text">Або звʼяжіться з нами вже зараз</div>
          <div class="blog-details__social">
            <a href="https://t.me/thecaresmart" class="blog-details__social-item">
              <img src="~/assets/telegram-icon.svg" alt="telegram icon">
            </a>
            <a href="https://tinyurl.com/4nrz8nch" class="blog-details__social-item">
              <img src="~/assets/viber-icon.svg" alt="viber icon">
            </a>
            <a href="tel:+380983125981" class="blog-details__social-item phone">
              <img src="~/assets/white-phone.svg" alt="phone icon">
            </a>
          </div>
        </div>

        <PopularPosts/>
      </div>
    </div>

    <div class="container">
      <div class="blog-details__same post-list">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
    <BuildSystemSection
      subtitle="ПОБУДУЙТЕ РОЗУМНУ АВТОМАТИЗОВАНУ СИСТЕМУ"
      title="Бездротовий <span>розумний</span> будинок твоєї мрії"
      text="Ми впевнені, що з розумним будинком ваше приміщення стане втіленням мрії про ідеальне життя. Відчуйте справжню розкіш комфорту та безпеки."
    />
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import Banner from "~/components/blogDetailsSections/Banner.vue";
import Image from "~/components/blogDetailsSections/Image.vue";
import Subtitle from "~/components/blogDetailsSections/Subtitle.vue";
import Text from "~/components/blogDetailsSections/Text.vue";
import Title from "~/components/blogDetailsSections/Title.vue";
import PopularPosts from "~/components/blogDetailsSections/PopularPosts.vue";
import PostCard from "~/components/blogDetailsSections/PostCard.vue";
import BuildSystemSection from "~/components/indexSections/BuildSystemSection.vue";

export default defineComponent({
  name: 'BlogDetails',

  components: {
    BuildSystemSection,
    PostCard,
    PopularPosts,
    Banner,
    Image,
    Subtitle,
    Text,
    Title,
  },

  data() {
    return {
      currentPost: [
        {
          template: 'Banner',
          breadCrumbs: 'Протипожежна система',
          title: 'Голосові асистенти та спікери: ваша особиста команда вдома',
          text: 'Сучасні технології не тільки змінюють наше оточення, але й перетворюють наші домівки в справжні інтелектуальні ' +
            'оселі. Завдяки голосовим асистентам та розумним спікерам, наші будинки стають не лише місцем проживання, але й ' +
            'власним командним центром, де кожен може легко керувати своїм побутом.',
          img: 'about-us-team',
          date: '5 листопада, 2023',
          authorName: 'Кирило Важинський',
          authorPosition: 'Головний майстер монтажу Smart Care',
          authorImg: 'about-us-team-3',
        },
        {
          template: 'Title',
          title: 'Вступ до Майбутнього Життя'
        },
        {
          template: 'Text',
          text: 'Сучасність - це епоха стрімкого розвитку технологій, яка пронизує усі сфери нашого життя. Однією з найбільш ' +
            'захоплюючих та практичних інновацій в цьому контексті є голосові асистенти та розумні спікери. Ці технології ' +
            'стають не просто розвагою, але й невід\'ємною частиною повсякденного життя, роблячи його зручнішим та ефективнішим.'
        },
        {
          template: 'Text',
          text: 'Сучасність - це епоха стрімкого розвитку технологій, яка пронизує усі сфери нашого життя. Однією з найбільш ' +
            'захоплюючих та практичних інновацій в цьому контексті є голосові асистенти та розумні спікери. Ці технології ' +
            'стають не просто розвагою, але й невід\'ємною частиною повсякденного життя, роблячи його зручнішим та ефективнішим.'
        },
        {
          template: 'Title',
          title: 'Як Голосові Асистенти Змінюють Побут'
        },
        {
          template: 'Subtitle',
          title: 'Управління Дому Голосом'
        },
        {
          template: 'Text',
          text: 'Однією з найважливіших функцій голосових асистентів є можливість керувати домом за допомогою голосових команд.' +
            ' Ви можете легко регулювати освітлення, температуру, а також відкривати та закривати двері та вікна. Це ' +
            'забезпечує не тільки зручність, але і підвищує рівень безпеки вашого будинку.'
        },
        {
          template: 'Image',
          img: 'anti-flood-image',
          imgText: 'Sonos Era 300',
        },
        {
          template: 'Subtitle',
          title: 'Освітлення та Розваги'
        },
        {
          template: 'Text',
          text: 'Голосові асистенти стають справжніми майстрами атмосфери в вашому будинку. Вони можуть створити різноманітні ' +
            'сценарії освітлення для різних ситуацій або відтворити вашу улюблену музику або подкасти з одного простого ' +
            'голосового запитання. Завдяки їм, ваш дім наповниться не лише світлом, але і відмінним настроєм.'
        },
        {
          template: 'Subtitle',
          title: 'Особистий Асистент вдома'
        },
        {
          template: 'Text',
          text: 'Голосові асистенти також виконують функції особистого помічника вдома. Вони можуть створювати списки покупок,' +
            ' нагадувати про важливі події або навіть відповідати на ваші запитання, надаючи інформацію за кілька секунд. ' +
            'Це робить їх незамінними помічниками в організації вашого повсякдення.'
        },
        {
          template: 'Text',
          text: 'Загальною ідеєю використання голосових асистентів та розумних спікерів є створення максимально комфортного ' +
            'та контрольованого середовища вдома. Вони дозволяють персоналізувати ваше оточення, враховуючи ваші уподобання та потреби.'
        },
        {
          template: 'Text',
          text: 'Голосові асистенти та розумні спікери - це не просто технологічні гаджети, це ваша особиста команда вдома, ' +
            'готова вас слухати та виконувати ваші найменші бажання. Створіть своє власне інтелектуальне простір, де кожен ' +
            'голосовий запит може перетворити ваш будинок на ідеальне місце для життя.'
        },
        {
          template: 'Title',
          title: 'Освітлення та Розваги'
        },
        {
          template: 'Text',
          text: 'Голосові асистенти стаютьF справжніми майстрами атмосфери в вашому будинку. Вони можуть створити різноманітні ' +
            'сценарії освітлення для різних ситуацій або відтворити вашу улюблену музику або подкасти з одного простого ' +
            'голосового запитання. Завдяки їм, ваш дім наповниться не лише світлом, але і відмінним настроєм.'
        },
        {
          template: 'Image',
          img: 'anti-flood-image',
          imgText: 'Amazon Alexa 2',
        },
        {
          template: 'Title',
          title: 'Можливості'
        },
        {
          template: 'Text',
          text: 'Загальною ідеєю використання голосових асистентів та розумних спікерів є створення максимально комфортного ' +
            'та контрольованого середовища вдома. Вони дозволяють персоналізувати ваше оточення, враховуючи ваші уподобання та потреби:'
        },
        {
          template: 'Text',
          text: 'Голосове додавання покупок до списку Нагадування про важливі події та завдання Отримання швидкої інформації на ' +
            'будь-яку тему Голосове консультування з різних галузей Голосове керування розкладом та плануванням подій ' +
            'Підтримка при роботі та вивченні'
        },
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.blog-details {
  padding: 120px 0;

  @media only screen and (min-width: 1160px) {
    padding: 160px 0;
  }
}

.blog-details__container {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-start;
    gap: 120px;
  }
}

.blog-details__body {
  width: 100%;

  @media only screen and (min-width: 1160px) {
    max-width: 700px;
  }
}

.banner__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.52px;
  color: $white;
  margin-bottom: 8px;
  margin-top: 20px;

  @media only screen and (min-width: 1160px) {
    font-size: 40px;
    margin-bottom: 16px;
  }
}

.banner__info {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-bottom: 40px;
  }
}

.banner__date {
  font-size: 13px;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 0;
  }
}

.banner__author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 0;
  }
}

.banner__author-image {
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 100px;
  overflow: hidden;
}

.banner__author-name {
  font-size: 14px;
  font-weight: 500;
  line-height: 165%;
  color: $white;
}

.banner__author-position {
  font-size: 13px;
}

.banner__image {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 760px) {
    height: 300px;
  }

  @media only screen and (min-width: 1160px) {
    height: 400px;
    margin-bottom: 40px;
  }
}

.banner__text {
  font-size: 15px;
}

.image-template {
  margin-top: 24px;

  @media only screen and (min-width: 760px) {
    padding: 32px;
  }
}

.blog-details__same {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;

  @media only screen and (min-width: 760px) {
    flex-direction: row;
  }
}

.image-template__image {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 760px) {
    height: 260px;
  }

  @media only screen and (min-width: 1160px) {
    height: 400px;
    margin-bottom: 20px;
  }
}

.image-template__body {

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.image-template__button {

  @media only screen and (min-width: 1160px) {
    width: auto;
  }
}

.image-template__title {
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  color: $white;
}

.image-template__name {
  font-size: 14px;
  margin-bottom: 12px;

  @media only screen and (min-width: 1160px) {
    margin-bottom: 0;
  }
}

.image-template__button {
  font-size: 13px;
}

.title {
  font-size: 22px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.22px;
  color: $white;
  margin-top: 40px;
}

.text-section {
  font-size: 15px;
  margin-top: 16px;

  @media only screen and (min-width: 1160px) {
    margin-top: 24px;
  }
}

.Subtitle {
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  margin-top: 32px;

  @media only screen and (min-width: 1160px) {
    margin-top: 24px;
  }
}

.blog-details__contact {
  margin-top: 48px;

  @media only screen and (min-width: 1160px) {
    margin-top: 0;
  }
}

.blog-details__contact-title {
  font-size: 19px;
  font-weight: 700;
  line-height: 150%;
  color: $white;
  margin-bottom: 20px;
}

.blog-details__button {
  margin-bottom: 20px;
}

.blog-details__text {
  font-size: 12px;
  margin-bottom: 12px;
}

.blog-details__social {
  display: flex;
  align-items: center;
  gap: 16px;
}

.blog-details__social-item {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.phone {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $dark-600;
    padding: 4px;
  }
}

.popular-posts {
  padding-top: 32px;
}

.popular-posts__title {
  font-size: 17px;
  font-weight: 700;
  line-height: 155%;
  color: $white;
  margin-bottom: 20px;
}

.popular-posts__item {
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    min-width: 72px;
    height: 48px;
    object-fit: cover;
    border: 1px solid $dark-600;
    border-radius: 8px;
    overflow: hidden;
  }

  span {
    font-size: 13px;
    font-weight: 700;
    line-height: 155%;
    color: $white;
  }
}
</style>