<template>
<header class="header">
  <div class="header__mobile-info">
    <div class="header__container">
      <div class="header__mobile-info-location">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3008_31595)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77843 3.23609C5.90194 2.12382 7.41904 1.49992 9 1.5C10.581 1.49992 12.0981 2.12382 13.2216 3.23609C14.3451 4.34837 14.9842 5.85912 15 7.44C15 11.55 9.75 16.125 9.4875 16.32C9.35165 16.4362 9.17876 16.5 9 16.5C8.82124 16.5 8.64835 16.4362 8.5125 16.32L8.51127 16.3189C8.26897 16.109 3 11.5428 3 7.44C3.01581 5.85912 3.65492 4.34837 4.77843 3.23609ZM7.99546 9.55019C8.31394 9.6821 8.65528 9.75 9 9.75C9.69619 9.75 10.3639 9.47344 10.8562 8.98116C11.3484 8.48887 11.625 7.82119 11.625 7.125C11.625 6.42881 11.3484 5.76113 10.8562 5.26885C10.3639 4.77656 9.69619 4.5 9 4.5C8.65528 4.5 8.31394 4.5679 7.99546 4.69982C7.67698 4.83174 7.3876 5.02509 7.14384 5.26885C6.90009 5.5126 6.70673 5.80198 6.57482 6.12046C6.4429 6.43894 6.375 6.78028 6.375 7.125C6.375 7.46972 6.4429 7.81106 6.57482 8.12954C6.70673 8.44802 6.90009 8.7374 7.14384 8.98116C7.3876 9.22491 7.67698 9.41827 7.99546 9.55019ZM9.7955 7.9205C9.58452 8.13147 9.29837 8.25 9 8.25C8.70163 8.25 8.41548 8.13147 8.2045 7.9205C7.99353 7.70952 7.875 7.42337 7.875 7.125C7.875 6.82663 7.99353 6.54048 8.2045 6.3295C8.41548 6.11853 8.70163 6 9 6C9.29837 6 9.58452 6.11853 9.7955 6.3295C10.0065 6.54048 10.125 6.82663 10.125 7.125C10.125 7.42337 10.0065 7.70952 9.7955 7.9205Z" fill="#575C6B"/>
          </g>
          <defs>
            <clipPath id="clip0_3008_31595">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span>м. Київ</span>
      </div>
      <a href="tel:+380983125981" class="header__mobile-info-phone">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3008_31603)">
            <path d="M11.5999 14.6664C8.87811 14.6629 6.2688 13.5801 4.34419 11.6555C2.41958 9.73087 1.33678 7.12156 1.33325 4.39975C1.33325 3.58642 1.65635 2.8064 2.23146 2.23129C2.80657 1.65618 3.58659 1.33308 4.39992 1.33308C4.57215 1.33177 4.74408 1.3474 4.91325 1.37975C5.07659 1.40375 5.23725 1.44442 5.39325 1.49975C5.50275 1.53817 5.60032 1.60451 5.67632 1.6922C5.75233 1.77989 5.80412 1.8859 5.82659 1.99975L6.73992 5.99975C6.76454 6.10833 6.76157 6.22134 6.73129 6.32847C6.70102 6.43561 6.64439 6.53345 6.56659 6.61308C6.47992 6.70642 6.47325 6.71308 5.65325 7.13975C6.30991 8.58032 7.46205 9.73719 8.89992 10.3998C9.33325 9.57308 9.33992 9.56642 9.43325 9.47975C9.51288 9.40194 9.61073 9.34532 9.71786 9.31504C9.825 9.28476 9.93801 9.2818 10.0466 9.30642L14.0466 10.2198C14.1568 10.2454 14.2586 10.2986 14.3426 10.3744C14.4265 10.4502 14.4899 10.5461 14.5266 10.6531C14.6398 10.9719 14.6962 11.3081 14.6933 11.6464C14.681 12.4563 14.3488 13.2284 13.7692 13.7942C13.1897 14.36 12.4098 14.6736 11.5999 14.6664Z" fill="#575C6B"/>
          </g>
          <defs>
            <clipPath id="clip0_3008_31603">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span>+380 (98) 312-59-81</span>
      </a>
    </div>
  </div>

  <div class="header__container">
    <div class="header__wrapper mobile" :class="{'menu-open': isMenuOpen}">
      <div class="header__left">
        <NuxtLink class="header__logo" to="/" @click="toggleMenu">
          <img src="~/assets/min-white-logo.svg" alt="Logo">
          <svg width="114" height="16" viewBox="0 0 114 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.22359 16C4.25789 16 3.2995 15.9049 2.34842 15.7147C1.39735 15.5391 0.61454 15.2904 0 14.9685V11.4787C0.790123 11.8884 1.60951 12.1957 2.45816 12.4006C3.32145 12.6054 4.14083 12.7078 4.91632 12.7078C5.63329 12.7078 6.17467 12.5981 6.54047 12.3786C6.90626 12.1591 7.08916 11.8445 7.08916 11.4348C7.08916 11.1276 6.98674 10.8642 6.78189 10.6447C6.59168 10.4106 6.30636 10.1984 5.92593 10.0082C5.5455 9.81802 4.9529 9.55464 4.14815 9.21811C2.72885 8.6182 1.6973 7.95245 1.0535 7.22085C0.409694 6.48925 0.0877915 5.58939 0.0877915 4.52126C0.0877915 3.64335 0.329218 2.86054 0.812071 2.17284C1.30956 1.48514 1.99726 0.951075 2.87517 0.570645C3.75309 0.190215 4.76269 0 5.90398 0C6.84042 0 7.67444 0.0731595 8.40604 0.219479C9.13763 0.365798 9.83996 0.599909 10.513 0.921811V4.32373C9.22542 3.65066 7.9305 3.31413 6.62826 3.31413C5.92593 3.31413 5.3626 3.43119 4.93827 3.6653C4.52858 3.88477 4.32373 4.20668 4.32373 4.631C4.32373 5.05533 4.53589 5.39918 4.96022 5.66255C5.38455 5.92593 6.16735 6.28441 7.30864 6.738C8.34751 7.16232 9.15226 7.57933 9.72291 7.98903C10.3082 8.39872 10.7325 8.87426 10.9959 9.41564C11.2593 9.95702 11.3909 10.6447 11.3909 11.4787C11.3909 12.898 10.8715 14.0101 9.83265 14.8148C8.80841 15.6049 7.27206 16 5.22359 16Z" fill="white"/>
            <path d="M12.9347 5.1358H16.5122V6.27709C16.9511 5.80887 17.4559 5.45039 18.0266 5.20165C18.5972 4.93827 19.2044 4.80658 19.8483 4.80658C20.6384 4.80658 21.2675 4.92364 21.7358 5.15775C22.2186 5.39186 22.6064 5.74303 22.899 6.21125C23.338 5.77229 23.872 5.42844 24.5012 5.1797C25.1304 4.93096 25.7669 4.80658 26.4107 4.80658C27.8007 4.80658 28.7884 5.16507 29.3736 5.88203C29.9589 6.58436 30.2515 7.60128 30.2515 8.93279V15.6708H26.5643V9.48148C26.5643 8.89621 26.4546 8.47188 26.2351 8.20851C26.0156 7.94513 25.6498 7.81344 25.1377 7.81344C24.4793 7.81344 23.9452 8.04755 23.5355 8.51578C23.5501 8.76452 23.5574 9.14495 23.5574 9.65707V15.6708H19.8702V9.32785C19.8702 8.78647 19.7751 8.39872 19.5849 8.16461C19.3947 7.9305 19.0581 7.81344 18.5753 7.81344C17.829 7.81344 17.1852 8.23045 16.6439 9.06447V15.6708H12.9347V5.1358Z" fill="white"/>
            <path d="M35.7687 16C34.4518 16 33.3837 15.6854 32.5643 15.0562C31.7595 14.4124 31.3572 13.5199 31.3572 12.3786C31.3572 11.1934 31.7449 10.2862 32.5204 9.65707C33.3105 9.01326 34.4372 8.69136 35.9004 8.69136C36.471 8.69136 37.0417 8.7572 37.6123 8.88889C38.183 9.00595 38.6731 9.1669 39.0828 9.37174V9.15226C39.0828 8.02561 38.161 7.46228 36.3174 7.46228C35.0298 7.46228 33.8519 7.71102 32.7838 8.20851V5.55281C33.252 5.33333 33.8665 5.15775 34.6274 5.02606C35.3883 4.87974 36.1784 4.80658 36.9978 4.80658C38.9584 4.80658 40.4363 5.20165 41.4312 5.99177C42.4408 6.76726 42.9456 7.85734 42.9456 9.262V15.6708H39.3242V14.7709C38.9292 15.1514 38.4317 15.4513 37.8318 15.6708C37.2319 15.8903 36.5442 16 35.7687 16ZM36.91 13.6296C37.3636 13.6296 37.7879 13.5418 38.183 13.3663C38.578 13.176 38.878 12.9346 39.0828 12.642V11.7202C38.4536 11.2958 37.7367 11.0837 36.9319 11.0837C36.4198 11.0837 36.0247 11.1934 35.7467 11.4129C35.4687 11.6324 35.3297 11.9543 35.3297 12.3786C35.3297 12.7737 35.4614 13.0809 35.7248 13.3004C36.0028 13.5199 36.3979 13.6296 36.91 13.6296Z" fill="white"/>
            <path d="M44.8062 5.1358H48.5374V6.45268C48.9471 5.98445 49.525 5.62597 50.2713 5.37723C51.0175 5.11386 51.7428 4.98217 52.65 4.98217V7.94513C51.6843 7.94513 50.9297 8.08413 50.1835 8.36214C49.4519 8.64015 48.9471 9.05716 48.6691 9.61317V15.6708H44.8062V5.1358Z" fill="white"/>
            <path d="M58.6907 16C57.3884 16 56.4008 15.6415 55.7277 14.9246C55.0693 14.193 54.7401 13.198 54.7401 11.9396V7.81344H53.2476V5.1358H54.7401V1.97531H58.6029V5.1358H61.0171V7.81344H58.6029V11.4129C58.6029 11.9835 58.7053 12.3932 58.9102 12.642C59.1296 12.8907 59.5101 13.0151 60.0514 13.0151C60.5343 13.0151 61.0171 12.8834 61.5 12.62V15.4952C61.1196 15.6708 60.7099 15.7952 60.2709 15.8683C59.8466 15.9561 59.3198 16 58.6907 16Z" fill="white"/>
            <path d="M73.7771 15.9981C71.8457 15.9981 70.3166 15.5152 69.19 14.5495C68.0633 13.5838 67.5 12.2084 67.5 10.4233C67.5 8.63825 68.0633 7.25553 69.19 6.2752C70.3313 5.29486 71.8676 4.80469 73.799 4.80469C74.6623 4.80469 75.4671 4.89248 76.2133 5.06806C76.9742 5.22901 77.6033 5.46312 78.1008 5.77039V8.77725C77.2083 8.13345 76.0304 7.81155 74.5672 7.81155C73.6308 7.81155 72.8772 8.03103 72.3066 8.46998C71.7506 8.89431 71.4726 9.54543 71.4726 10.4233C71.4726 11.3159 71.7506 11.9743 72.3066 12.3987C72.8626 12.8083 73.6088 13.0132 74.5453 13.0132C75.9646 13.0132 77.1936 12.6767 78.2325 12.0036V14.9885C77.1205 15.6616 75.6353 15.9981 73.7771 15.9981Z" fill="white"/>
            <path d="M83.6356 15.9981C82.3188 15.9981 81.2506 15.6835 80.4312 15.0543C79.6265 14.4105 79.2241 13.518 79.2241 12.3767C79.2241 11.1915 79.6119 10.2843 80.3873 9.65517C81.1775 9.01136 82.3041 8.68946 83.7673 8.68946C84.338 8.68946 84.9086 8.75531 85.4792 8.88699C86.0499 9.00405 86.5401 9.165 86.9498 9.36985V9.15037C86.9498 8.02371 86.0279 7.46038 84.1843 7.46038C82.8967 7.46038 81.7189 7.70912 80.6507 8.20661V5.55092C81.1189 5.33144 81.7335 5.15585 82.4943 5.02417C83.2552 4.87785 84.0453 4.80469 84.8647 4.80469C86.8254 4.80469 88.3032 5.19975 89.2982 5.98987C90.3078 6.76536 90.8126 7.85544 90.8126 9.26011V15.6689H87.1912V14.769C86.7961 15.1495 86.2986 15.4494 85.6987 15.6689C85.0988 15.8884 84.4111 15.9981 83.6356 15.9981ZM84.7769 13.6277C85.2305 13.6277 85.6548 13.5399 86.0499 13.3644C86.445 13.1741 86.7449 12.9327 86.9498 12.6401V11.7183C86.3206 11.2939 85.6036 11.0818 84.7989 11.0818C84.2868 11.0818 83.8917 11.1915 83.6137 11.411C83.3357 11.6305 83.1967 11.9524 83.1967 12.3767C83.1967 12.7718 83.3284 13.079 83.5917 13.2985C83.8697 13.518 84.2648 13.6277 84.7769 13.6277Z" fill="white"/>
            <path d="M92.6732 5.13391H96.4043V6.45078C96.814 5.98256 97.392 5.62408 98.1382 5.37533C98.8844 5.11196 99.7111 4.98027 100.618 4.98027V7.94323C99.6526 7.94323 98.7966 8.08224 98.0504 8.36024C97.3188 8.63825 96.814 9.05526 96.536 9.61127V15.6689H92.6732V5.13391Z" fill="white"/>
            <path d="M107.907 15.9981C105.844 15.9981 104.22 15.5152 103.035 14.5495C101.864 13.5838 101.279 12.2158 101.279 10.4453C101.279 8.70409 101.799 7.32869 102.837 6.31909C103.891 5.30949 105.405 4.80469 107.381 4.80469C108.639 4.80469 109.714 5.04611 110.607 5.52897C111.514 5.99719 112.195 6.64831 112.648 7.48233C113.116 8.30172 113.35 9.23084 113.35 10.2697V11.6963H104.944C105.091 12.2816 105.457 12.7059 106.042 12.9693C106.627 13.2327 107.425 13.3644 108.434 13.3644C109.122 13.3644 109.824 13.3058 110.541 13.1888C111.273 13.0717 111.902 12.9108 112.429 12.7059V15.2519C111.887 15.4714 111.207 15.6469 110.388 15.7786C109.583 15.9249 108.756 15.9981 107.907 15.9981ZM109.707 9.28205C109.649 8.71141 109.414 8.26514 109.005 7.94323C108.595 7.62133 108.032 7.46038 107.315 7.46038C106.612 7.46038 106.056 7.62865 105.647 7.96518C105.237 8.28708 105.003 8.72604 104.944 9.28205H109.707Z" fill="white"/>
          </svg>
        </NuxtLink >
      </div>
      <div class="header__right">
        <Button class="header__nav-button blue" @click="toggleConsultationModal">
          Консультація
          <img src="~/assets/white-arrow-right.svg" alt="Icon">
        </Button>
        <div class="header__burger" @click="toggleMenu">
          <div class="header__burger-line-1"></div>
          <div class="header__burger-line-2"></div>
          <div class="header__burger-line-3"></div>
        </div>
      </div>

      <div class="header__menu">

        <div class="header__actions">
          <SimpleDropdown class="header__location-dropdown">
            <template v-slot:trigger>
              <Button class="gray">
                Київ
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2337_16589)">
                    <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#84899A"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2337_16589">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </template>
            <template v-slot:body>
              <div class="header__location-item">
                <img src="~/assets/black-location.svg" alt="Location Icon">
                Київ
              </div>
              <div class="header__location-info">
                <img src="~/assets/gray-information.svg" alt="Information Icon">
                <span>Наразі ми пропонуємо наші послуги тільки в місті Київ.</span>
              </div>
            </template>
          </SimpleDropdown>
          <Button class="header__showroom showroom-trigger button gray" @click="toggleShowRoomModal">Відвідати Шоурум</Button>
        </div>
        <Accordion>
          <template v-slot:trigger>
            <div class="header__menu-link">
              <span class="header__menu-link-text">Послуги</span>
              <img class="header__accordion-chevron chevron" src="~/assets/min-white-arrow-right.svg" alt="Icon">
            </div>
          </template>
          <template v-slot:body>
            <div
              v-for="(section, index) in links"
              :key="index"
              class="header__accordion-section"
            >
              <div class="header__accordion-title">{{ section.titleShort }}</div>
              <DropdownLink
                v-for="(link, index) in section.links"
                :key="index"
                :url="link.url"
                :text="link.text"
                :icon="link.icon"
                @click="toggleMenu"
              />
              <ArrowLink
                :url="`/service?type=${section.type}`"
                text="Усі функції безпеки"
                @click="toggleMenu"
              />
            </div>
            <div class="header__calculator-wrapper">
              <CalculateButton @click="toggleMenu"/>
            </div>
          </template>
        </Accordion>
        <MobileLink url="/calculator" @click="toggleMenu">Розрахувати вартість</MobileLink>
        <MobileLink url="/about-us" @click="toggleMenu">Про нас</MobileLink>
<!--        <MobileLink url="/blog" @click="toggleMenu">Блог</MobileLink>-->
        <MobileLink url="/contacts" @click="toggleMenu">Контакти</MobileLink>
        <MobileLink href="tel:+380983125981">
          <img class="mobile-link__phone" src="~/assets/white-phone.svg" alt="Icon">
          +380 (98) 312-59-81
        </MobileLink>

        <div class="header__menu-action-wrapper">
          <div class="header__menu-action-title">Бездротовий розумний будинок твоєї мрії</div>
          <Button class="header__nav-button blue" @click="toggleConsultationModal">
            Безкоштовна консультація
            <img src="~/assets/white-arrow-right.svg" alt="Icon">
          </Button>
        </div>
      </div>
    </div>

    <div class="header__wrapper desktop">
      <div class="header__left">
        <NuxtLink class="header__logo" to="/">
          <img src="~/assets/white-logo.svg" alt="Logo">
        </NuxtLink>

        <SimpleDropdown class="header-desktop__service">
          <template v-slot:trigger>
            <Button class="transparent">
              Послуги
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2337_16589)">
                  <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#84899A"/>
                </g>
                <defs>
                  <clipPath id="clip0_2337_16589">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </template>
          <template v-slot:body="props">
            <div
              v-for="(section, index) in links"
              :key="index"
              class="services__wrapper"
            >
              <div class="services__title">{{ section.titleShort }}</div>
              <div class="services__list">
                <DropdownLink
                  v-for="(link, index) in section.links"
                  :key="index"
                  class="services__link"
                  :url="link.url"
                  :text="link.text"
                  :icon="link.icon"
                  @click="props.toggleVisibility"
                />
              </div>
              <ArrowLink
                :url="`/service?type=${section.type}`"
                :text="`Усі ${section.title}`"
                @click="props.toggleVisibility"
              />
            </div>
            <div class="services__calculate">
              <CalculateButton/>
            </div>
          </template>
        </SimpleDropdown>
        <DesktopLink url="/calculator">Розрахувати вартість</DesktopLink>
        <SimpleDropdown class="simple-dropdown__company">
          <template v-slot:trigger>
            <Button class="transparent">
              Компанія
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2337_16589)">
                  <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#84899A"/>
                </g>
                <defs>
                  <clipPath id="clip0_2337_16589">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </template>
          <template v-slot:body="props">
            <DropdownLink
              url="/about-us"
              text="Про нас"
              icon="white-info"
              @click="props.toggleVisibility"
            />
<!--            <DropdownLink-->
<!--              url="/blog"-->
<!--              text="Блог"-->
<!--              icon="white-message"-->
<!--              @click="props.toggleVisibility"-->
<!--            />-->
            <DropdownLink
              url="/contacts"
              text="Контакти"
              icon="white-phone"
              @click="props.toggleVisibility"
            />
          </template>
        </SimpleDropdown>
      </div>
      <div class="header__right">
        <DesktopLink href="tel:+380983125981">+380 (98) 312-59-81</DesktopLink>
        <SimpleDropdown>
          <template v-slot:trigger>
            <Button class="gray">
              Київ
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2337_16589)">
                  <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#84899A"/>
                </g>
                <defs>
                  <clipPath id="clip0_2337_16589">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </template>
          <template v-slot:body>
            <div class="header__location-item">
              <img src="~/assets/black-location.svg" alt="Location Icon">
              Київ
            </div>
            <div class="header__location-info">
              <img src="~/assets/gray-information.svg" alt="Information Icon">
              <span>Наразі ми пропонуємо наші послуги тільки в місті Київ.</span>
            </div>
          </template>
        </SimpleDropdown>
        <Button class="header__showroom showroom-trigger button gray" @click="toggleShowRoomModal">Відвідати Шоурум</Button>
        <Button class="header__desktop-button button blue animated" @click="toggleConsultationModal">
          Консультація
          <span class="button-shine"></span>
          <img src="~/assets/white-arrow-right.svg" alt="Icon">
        </Button>
      </div>
    </div>
  </div>
</header>
</template>

<script>
import {defineComponent} from 'vue'
import SimpleDropdown from "~/UI/SimpleDropdown.vue";
import Accordion from "~/UI/Accordion.vue";
import DropdownLink from "~/UI/DropdownLink.vue";
import ArrowLink from "~/UI/ArrowLink.vue";
import CalculateButton from "~/UI/CalculateButton.vue";
import MobileLink from "~/UI/MobileLink.vue";
import DesktopLink from "~/UI/DesktopLink.vue";
import Button from "~/UI/Button.vue";

export default defineComponent({
  name: 'Header',

  components: {
    Button,
    DesktopLink,
    MobileLink,
    CalculateButton,
    ArrowLink,
    SimpleDropdown,
    Accordion,
    DropdownLink,
  },

  props: {
    links: {
      type: Array,
      default: () => []
    }
  },

  inject: ['toggleShowRoomModal', 'toggleConsultationModal'],

  data() {
    return {
      isMenuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
})
</script>

<style scoped lang="scss">
@import 'vars';

.mobile-link__phone {
  margin-right: 4px;
}
.simple-dropdown__company :deep(.simple-dropdown-body) {
  max-width: 200px;
}
.simple-dropdown__company {
 .button {
   background: transparent !important;
 }
}
:deep(.header-desktop__service) {
  .simple-dropdown-body {
    width: 700px;
    padding: 0;
    max-height: calc(100vh - 100px);
    overflow: auto;
  }
  .services__wrapper {
    padding: 28px 24px 32px 24px;
    border-bottom: 1px solid $dark-600;
  }
  .services__title {
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: .12px;
    text-transform: uppercase;
    color: #616676;
    padding-left: 8px;
    margin-bottom: 12px;
  }
  .services__list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  .services__link {
    width: calc(50% - 6px);
  }
  .services__calculate {
    padding: 24px 32px;
  }

  .button {
    background: transparent !important;
  }
}
.header__wrapper.desktop .header__desktop-button {
  width: auto;
}
.header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: $dark-900;
  z-index: 9999;

  @media only screen and (min-width: 1160px) {
    padding-top: 16px;
  }
}
.header__container {
  height: 52px;
  padding: 0 20px;

  @media only screen and (min-width: 760px) {
    padding: 0 30px;
  }

  @media only screen and (min-width: 1160px) {
    padding: 0 30px;
    height: 64px;
    margin: 0 auto;
    width: 100%;
  }

  @media only screen and (min-width: 1387px) {
    padding: 0 24px;
  }
}
.header__mobile-info {
  width: 100%;
  height: 32px;
  margin-bottom: 12px;
  background: $dark-800;

  .header__container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    color: $white;
  }

  .header__mobile-info-location {
    display: flex;
    align-items: center;

    svg {
      margin-right: 4px;
    }
  }

  .header__mobile-info-phone {
    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }
  }

  @media only screen and (min-width: 1160px) {
    display: none;
  }
}
.header__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $dark-800;
  border: 1px solid $dark-600;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px 0 rgba(4, 5, 6, 0.06);

  &.mobile {
    padding: 0 10px 0 16px;

    @media only screen and (min-width: 1160px) {
      display: none;
    }
  }

  &.menu-open {

    .header__logo svg {
      opacity: 1;
    }

    .header__nav-button {
      transform: translateX(200px);
    }

    .header__burger-line-1 {
      transform: translate(0, 6px) rotate(-45deg);
    }

    .header__burger-line-2 {
      transform: translate(20px);
      opacity: 0;
    }

    .header__burger-line-3 {
      transform: translate(0, -6px) rotate(45deg);
    }

    .header__menu {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
  }

  &.desktop {
    display: none;

    @media only screen and (min-width: 1160px) {
      display: flex;
      padding: 0 16px 0 32px;
      overflow: visible;
    }
  }
}
.header__left {
  width: calc(100% - 180px);

  @media only screen and (min-width: 1160px) {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  }
}
.header__right {
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__nav-button {
    height: 32px !important;
  }

  @media only screen and (min-width: 1160px) {
    justify-content: flex-end;
    width: 50%;
    height: 100%;
    gap: 12px;

    .header__nav-button {
      height: 40px !important;
    }
  }
}
.header__showroom {

  @media only screen and (min-width: 1160px) {
    max-width: 178px !important;
  }
}
.header__location-dropdown {

  @media only screen and (min-width: 1160px) {
    max-width: 71px !important;
    margin-right: 12px;
  }
}
.header__logo {
  position: relative;
  display: flex;
  height: 18px;
  width: 32px;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    position: absolute;
    height: 18px;
    transform: translateX(40px);
    transition: all .3s ease;
    opacity: 0;
  }

  @media only screen and (min-width: 1160px) {
    height: 100%;
    width: 100%;
    max-width: 132px;
    margin-right: 32px;
  }
}
.header__burger {
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: $dark-600;
  border-radius: 6px;
  margin-left: 8px;
  z-index: 2;
  cursor: pointer;

  &-line-1, &-line-2, &-line-3, {
    width: 18px;
    height: 2px;
    background: $white;
    border-radius: 100px;
    transition: all .3s ease;
  }

  &-line-2 {
    margin: 4px 0;
  }
}
.header__nav-button {
  max-width: 140px;

  @media only screen and (min-width: 1160px) {
    height: 40px !important;
    max-width: 166px;
    margin-left: 12px;
  }
}
.header__menu {
  width: 100%;
  height: calc(100vh - 96px);
  position: fixed;
  left: 0;
  top: 96px;
  background: $dark-900;
  padding: 24px 20px 20px 20px;
  transition: all .3s ease;
  transform: translateY(100px);
  pointer-events: none;
  opacity: 0;
  overflow: auto;
}
.header__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.header__location-dropdown {
  width: calc(50% - 6px);
}
.header__location-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: $white;
  height: 38px;
  border-radius: 7px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  color: $dark-800;
  margin-bottom: 12px;

  img {
    margin-right: 4px;
  }
}
.header__location-info {
  border-radius: 8px;
  background: $dark-700;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    width: calc(100% - 26px);
    font-size: 14px;
    font-weight: 500;
    line-height: 165%;
    color: $dark-300;
  }
}
.header__showroom {
  max-width: calc(50% - 6px);
}
.header__menu-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: $white;
  height: 48px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid $dark-700;

  &.phone {
    justify-content: flex-start;

    img {
      margin-right: 4px;
    }
  }
}
.header__menu-action-wrapper {
  width: 100%;
  background: $dark-800;
  border-radius: 16px;
  padding: 24px;
  margin-top: 40px;

  .header__nav-button {
    max-width: 100%;
    transform: translateX(0) !important;
  }
}
.header__menu-action-title {
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 24px;
  color: $white;
}
.header__accordion-chevron {
  transform: rotate(90deg);
  transition: all .3s ease;
}
.header__accordion-section {
  padding: 16px 8px;
}
.header__calculator-wrapper {
  padding-bottom: 32px;
  margin-bottom: 8px;
  border-bottom: 1px solid $dark-700;
}
.header__accordion-title {
  font-size: 12px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.12px;
  color: #616676;
  text-transform: uppercase;
  margin-bottom: 12px;
}
</style>