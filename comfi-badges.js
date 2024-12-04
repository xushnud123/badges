const getAllAttributes = (el) =>
  el.getAttributeNames().reduce(
    (obj, name) => ({
      ...obj,
      [name]: el.getAttribute(name),
    }),
    {}
  );

const monthPrice = (price, plan) => {
  return Math.round((price * 100) / plan) / 100;
};

function ComfiBadges({
  id = "",
  currency = "SAR",
  price = 100,
  plan = 4,
  style = 3,
  logo = false,
}) {
  const comfiBadges = document.getElementById(id);

  if (comfiBadges) {
    comfiBadges.classList.add("comfi-badges");
    comfiBadges.classList.add(`style_${logo ? "3" : style}`);
    comfiBadges.insertAdjacentHTML(
      "afterbegin",
      `Pay only ${currency} ${monthPrice(price, plan)} ${
        logo
          ? `with <span class='logo'><svg
            width='70'
            height='20'
            viewBox='0 0 70 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='69.5' height='20' rx='10' fill='#51FC8F' />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12.4463 3H10.0624V6.86027L7.33784 4.1357L5.65217 5.82136L8.39332 8.56251H4.5V10.9464H8.39361L5.65224 13.6878L7.33791 15.3734L10.0624 12.6489V16.5087H12.4463V12.6155L15.2043 15.3735L16.8899 13.6878L14.1485 10.9464H18.0087V8.56251H14.1488L16.89 5.82133L15.2043 4.13566L12.4463 6.8937V3Z'
              fill='black'
            />
            <path
              d='M26.2604 14.9063C25.4677 14.9063 24.7589 14.7991 24.1341 14.5846C23.5092 14.3608 22.9777 14.039 22.5393 13.6193C22.1103 13.1997 21.7793 12.6867 21.5461 12.0805C21.3223 11.4744 21.2104 10.7889 21.2104 10.0242C21.2104 9.25942 21.3316 8.57395 21.5741 7.96776C21.8166 7.36156 22.1616 6.84863 22.6093 6.42896C23.0569 5.99996 23.5932 5.67355 24.218 5.44972C24.8522 5.2259 25.561 5.11399 26.3444 5.11399C26.9319 5.11399 27.5008 5.17927 28.051 5.30983C28.6106 5.43107 29.1142 5.63158 29.5619 5.91136C30.0095 6.19115 30.3825 6.55486 30.681 7.00251C30.9887 7.44084 31.1846 7.97242 31.2685 8.59727H29.0722C28.9976 8.33614 28.8577 8.11231 28.6526 7.92579C28.4567 7.73927 28.2236 7.58539 27.9531 7.46415C27.692 7.34291 27.4169 7.25432 27.1278 7.19836C26.8386 7.1424 26.5635 7.11442 26.3024 7.11442C25.8174 7.11442 25.3931 7.17971 25.0294 7.31027C24.675 7.44084 24.3766 7.63202 24.1341 7.88382C23.8916 8.1263 23.7098 8.4294 23.5885 8.79311C23.4673 9.1475 23.4067 9.55319 23.4067 10.0102C23.4067 10.4578 23.4673 10.8635 23.5885 11.2272C23.7098 11.5816 23.8916 11.8847 24.1341 12.1365C24.3859 12.3883 24.689 12.5795 25.0434 12.7101C25.4071 12.8406 25.8268 12.9059 26.3024 12.9059C26.5635 12.9059 26.8433 12.8779 27.1417 12.822C27.4402 12.7567 27.72 12.6634 27.9811 12.5422C28.2515 12.4116 28.4894 12.2531 28.6945 12.0666C28.909 11.88 29.0536 11.6562 29.1282 11.3951H31.2825C31.1799 12.0199 30.9701 12.5562 30.653 13.0038C30.3452 13.4421 29.9629 13.8059 29.5059 14.095C29.0489 14.3748 28.5407 14.5799 27.9811 14.7105C27.4215 14.8411 26.848 14.9063 26.2604 14.9063Z'
              fill='black'
            />
            <path
              d='M31.9754 11.3951C31.9754 10.1827 32.3251 9.29206 33.0246 8.72317C33.7334 8.14495 34.7219 7.85585 35.9903 7.85585C37.24 7.85585 38.2099 8.13563 38.9 8.69519C39.5901 9.24543 39.9352 10.1454 39.9352 11.3951C39.9352 12.5702 39.5855 13.4515 38.886 14.039C38.1866 14.6172 37.2213 14.9063 35.9903 14.9063C35.4027 14.9063 34.8618 14.8364 34.3675 14.6965C33.8826 14.5473 33.4629 14.3281 33.1085 14.039C32.7541 13.7406 32.4744 13.3722 32.2692 12.9339C32.0733 12.4956 31.9754 11.9826 31.9754 11.3951ZM34.0598 11.3811C34.0598 11.6889 34.1017 11.95 34.1857 12.1645C34.2696 12.379 34.3909 12.5562 34.5494 12.6961C34.7173 12.8266 34.9224 12.9199 35.1649 12.9758C35.4074 13.0318 35.6825 13.0598 35.9903 13.0598C36.5778 13.0598 37.0348 12.9152 37.3612 12.6261C37.6876 12.337 37.8508 11.922 37.8508 11.3811C37.8508 10.8215 37.6876 10.4065 37.3612 10.1361C37.0348 9.85628 36.5778 9.71639 35.9903 9.71639C35.3934 9.71639 34.9224 9.86095 34.5774 10.1501C34.2323 10.4392 34.0598 10.8495 34.0598 11.3811Z'
              fill='black'
            />
            <path
              d='M42.7909 11.1433C42.7909 10.9381 42.8329 10.7469 42.9168 10.5697C43.0008 10.3832 43.1127 10.2247 43.2526 10.0941C43.3925 9.95421 43.5557 9.84696 43.7422 9.77235C43.938 9.68841 44.1479 9.64645 44.3717 9.64645C44.5769 9.64645 44.7587 9.67909 44.9173 9.74437C45.0758 9.80033 45.211 9.88426 45.323 9.99617C45.4349 10.1081 45.5188 10.2433 45.5748 10.4019C45.64 10.5604 45.6727 10.7329 45.6727 10.9195V14.9063H47.827V11.1433C47.827 10.9288 47.8643 10.7329 47.9389 10.5557C48.0228 10.3692 48.1348 10.206 48.2746 10.0661C48.4239 9.92623 48.5964 9.81898 48.7922 9.74437C48.9881 9.66044 49.1979 9.61847 49.4217 9.61847C49.6176 9.61847 49.7995 9.65111 49.9673 9.71639C50.1445 9.78167 50.2937 9.87493 50.415 9.99617C50.5362 10.1081 50.6295 10.2433 50.6948 10.4019C50.7694 10.5604 50.8067 10.7329 50.8067 10.9195V14.9063H52.961V10.3179C52.961 9.88892 52.905 9.51122 52.7931 9.18481C52.6812 8.84907 52.5133 8.56929 52.2895 8.34546C52.075 8.12164 51.8046 7.95377 51.4781 7.84186C51.1611 7.72994 50.788 7.67399 50.359 7.67399C50.1445 7.67399 49.888 7.72528 49.5896 7.82787C49.3005 7.92113 49.0254 8.09832 48.7643 8.35945C48.5031 8.61125 48.2793 8.96565 48.0928 9.42262C47.9156 9.87027 47.827 10.4438 47.827 11.1433C47.827 10.4438 47.7337 9.87027 47.5472 9.42262C47.3607 8.96565 47.1322 8.61125 46.8617 8.35945C46.5913 8.09832 46.3022 7.92113 45.9944 7.82787C45.696 7.72528 45.4255 7.67399 45.1831 7.67399C44.9779 7.67399 44.7354 7.72528 44.4556 7.82787C44.1758 7.92113 43.9147 8.089 43.6722 8.33147C43.4298 8.57395 43.2199 8.90036 43.0427 9.31071C42.8749 9.72105 42.7909 10.2433 42.7909 10.8775V7.9118H40.6366V14.9063H42.7909V11.1433Z'
              fill='black'
            />
            <path
              d='M56.7054 7.00251H58.3561V5.11399H55.866C55.465 5.11399 55.1199 5.15129 54.8308 5.2259C54.551 5.29118 54.3225 5.3891 54.1454 5.51967C53.9775 5.64091 53.8516 5.79479 53.7676 5.98131C53.693 6.1585 53.6557 6.35435 53.6557 6.56885C53.6557 7.0165 53.8283 7.37555 54.1733 7.64601C54.5184 7.90714 55.0826 8.0377 55.866 8.0377H53.6557V9.80033H54.9427V14.9063H57.0551V9.80033H58.3561V8.0377H56.7054C56.3976 8.0377 56.1225 8.00506 55.88 7.93978C55.6375 7.86517 55.5163 7.72062 55.5163 7.50612C55.5163 7.29162 55.6235 7.15639 55.838 7.10044C56.0619 7.03515 56.351 7.00251 56.7054 7.00251Z'
              fill='black'
            />
            <path
              d='M59.2198 7.92579H61.3741V14.9063H59.2198V7.92579ZM60.2829 6.83464C59.9379 6.83464 59.6441 6.72273 59.4016 6.4989C59.1685 6.26575 59.0519 5.97198 59.0519 5.61759C59.0519 5.2632 59.1685 4.9741 59.4016 4.75027C59.6441 4.51712 59.9379 4.40054 60.2829 4.40054C60.628 4.40054 60.9171 4.51712 61.1503 4.75027C61.3834 4.98342 61.5 5.27253 61.5 5.61759C61.5 5.96266 61.3834 6.25176 61.1503 6.48492C60.9264 6.71807 60.6373 6.83464 60.2829 6.83464Z'
              fill='black'
            />
          </svg></span>`
          : `today <span><svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M9.19847 2.03751C8.4889 2.10843 7.54134 2.35403 6.87568 2.63954C3.27701 4.18314 1.31869 8.0575 2.21864 11.8531C2.33334 12.3368 2.52983 12.9023 2.73249 13.3319C2.82281 13.5234 2.8967 13.6993 2.8967 13.7228C2.8967 13.7463 2.69247 14.528 2.4429 15.4599C1.93953 17.3392 1.93933 17.3405 2.12155 17.6353C2.23925 17.8256 2.47558 17.976 2.68927 17.9966C2.81864 18.009 3.16387 17.9273 4.54199 17.5582C5.47352 17.3087 6.25751 17.1045 6.28418 17.1045C6.31086 17.1045 6.43356 17.1551 6.55689 17.2168C7.44117 17.6596 8.62204 17.9517 9.69861 17.9939C12.989 18.1229 16.0462 16.1878 17.3504 13.1506C19.0302 9.23886 17.3413 4.70489 13.4997 2.81306C12.1967 2.17141 10.6495 1.89243 9.19847 2.03751ZM10.5821 3.58391C10.9972 3.60951 11.6088 3.73898 12.0833 3.9018C13.4586 4.3736 14.6041 5.26935 15.4078 6.50156C16.7843 8.61195 16.7874 11.3798 15.4155 13.4947C14.1334 15.4713 11.924 16.5826 9.57144 16.4344C8.71913 16.3806 7.94215 16.1657 7.09124 15.7483C6.63968 15.5268 6.55999 15.4983 6.39768 15.4997C6.27441 15.5008 5.83196 15.605 5.04797 15.8174C4.40652 15.9912 3.87894 16.1306 3.87564 16.1272C3.87231 16.1237 4.01194 15.5958 4.18589 14.9539C4.40292 14.1531 4.50235 13.7294 4.50278 13.6036C4.50335 13.4422 4.47331 13.3589 4.25305 12.91C3.70703 11.7975 3.50234 10.8027 3.56875 9.58429C3.66365 7.84284 4.54519 6.12559 5.91188 5.01994C6.75035 4.34159 7.70372 3.88846 8.73097 3.68007C9.15102 3.59484 9.80594 3.53566 10.1154 3.555C10.2071 3.56073 10.4171 3.57374 10.5821 3.58391ZM9.71528 5.37284C9.50245 5.48858 9.39332 5.59037 9.31627 5.74498L9.23181 5.9145L9.23254 8.73372C9.23325 11.3969 9.23668 11.5604 9.29446 11.6864C9.42417 11.9691 9.6831 12.1365 9.99082 12.1365C10.331 12.1365 10.6115 11.9428 10.7304 11.6258C10.7541 11.5626 10.7653 10.6156 10.7648 8.72502C10.7641 6.06941 10.7608 5.91086 10.7027 5.78469C10.5664 5.48878 10.3213 5.334 9.99169 5.33557C9.87633 5.33613 9.75196 5.3529 9.71528 5.37284ZM9.71371 13.1476C9.45411 13.2477 9.25755 13.4393 9.16699 13.6807C9.10411 13.8484 9.12478 14.1706 9.21017 14.354C9.35708 14.6695 9.64029 14.8463 9.99869 14.8463C10.5047 14.8463 10.8655 14.4813 10.8645 13.9703C10.864 13.704 10.7888 13.525 10.6005 13.3422C10.3797 13.128 9.98786 13.042 9.71371 13.1476Z'
              fill='currentColor'
            />
          </svg></span>`
      }
      `
    );
  }
}

function ComfiBanner({ id = "", style = 1, discount = 10 }) {
  const comfiBanner = document.getElementById(id);

  if (comfiBanner) {
    comfiBanner.classList.add("comfi-banner");
    comfiBanner.classList.add(`style_${style}`);
    comfiBanner.insertAdjacentHTML(
      "afterbegin",
      `<p class='title'>Save ${discount}% on annual plans and still pay monthly with</p>
        <span class='logo'>
        ${
          style === 1
            ? `<svg
              width='78'
              height='22'
              viewBox='0 0 78 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M14.466 3.3H11.8437V7.5463L8.84666 4.54927L6.99243 6.4035L10.0077 9.41876H5.72504V12.041H10.008L6.9925 15.0565L8.84673 16.9108L11.8437 13.9138V18.1596H14.466V13.877L17.4997 16.9108L19.354 15.0566L16.3384 12.041H20.5846V9.41876H16.3387L19.354 6.40346L17.4998 4.54923L14.466 7.58308V3.3Z'
                fill='white'
              />
              <path
                d='M29.6615 16.397C28.7895 16.397 28.0099 16.279 27.3225 16.043C26.6352 15.7968 26.0505 15.4429 25.5683 14.9813C25.0964 14.5196 24.7322 13.9554 24.4758 13.2886C24.2295 12.6218 24.1064 11.8678 24.1064 11.0266C24.1064 10.1854 24.2398 9.43134 24.5065 8.76453C24.7733 8.09771 25.1528 7.53349 25.6452 7.07185C26.1377 6.59995 26.7275 6.2409 27.4149 5.99469C28.1125 5.74848 28.8921 5.62538 29.7538 5.62538C30.4001 5.62538 31.0259 5.69719 31.6312 5.84081C32.2467 5.97417 32.8007 6.19473 33.2931 6.50249C33.7855 6.81025 34.1958 7.21034 34.5241 7.70276C34.8626 8.18491 35.0781 8.76966 35.1704 9.45699H32.7545C32.6724 9.16974 32.5185 8.92354 32.2929 8.71836C32.0774 8.51319 31.821 8.34392 31.5235 8.21056C31.2362 8.0772 30.9336 7.97974 30.6156 7.91819C30.2975 7.85664 29.9949 7.82586 29.7077 7.82586C29.1742 7.82586 28.7075 7.89767 28.3074 8.04129C27.9175 8.18491 27.5893 8.39522 27.3225 8.6722C27.0558 8.93892 26.8558 9.27233 26.7224 9.67242C26.589 10.0622 26.5224 10.5085 26.5224 11.0112C26.5224 11.5036 26.589 11.9498 26.7224 12.3499C26.8558 12.7398 27.0558 13.0732 27.3225 13.3501C27.5995 13.6271 27.9329 13.8374 28.3228 13.9811C28.7228 14.1247 29.1845 14.1965 29.7077 14.1965C29.9949 14.1965 30.3027 14.1657 30.631 14.1042C30.9592 14.0323 31.267 13.9298 31.5542 13.7964C31.8517 13.6528 32.1133 13.4784 32.339 13.2732C32.575 13.068 32.734 12.8218 32.816 12.5346H35.1858C35.0729 13.2219 34.8421 13.8118 34.4933 14.3042C34.1548 14.7864 33.7342 15.1864 33.2315 15.5045C32.7288 15.8122 32.1697 16.0379 31.5542 16.1815C30.9387 16.3252 30.3078 16.397 29.6615 16.397Z'
                fill='white'
              />
              <path
                d='M35.948 12.5346C35.948 11.201 36.3327 10.2213 37.1021 9.59548C37.8817 8.95944 38.9692 8.64142 40.3643 8.64142C41.739 8.64142 42.8059 8.94918 43.565 9.5647C44.3242 10.17 44.7037 11.1599 44.7037 12.5346C44.7037 13.8272 44.319 14.7966 43.5496 15.4429C42.7802 16.0789 41.7185 16.397 40.3643 16.397C39.718 16.397 39.123 16.32 38.5793 16.1661C38.0459 16.002 37.5842 15.7609 37.1944 15.4429C36.8046 15.1146 36.4968 14.7094 36.2711 14.2273C36.0557 13.7451 35.948 13.1809 35.948 12.5346ZM38.2408 12.5192C38.2408 12.8577 38.287 13.145 38.3793 13.3809C38.4716 13.6169 38.605 13.8118 38.7794 13.9657C38.964 14.1093 39.1897 14.2119 39.4564 14.2734C39.7232 14.335 40.0258 14.3658 40.3643 14.3658C41.0106 14.3658 41.5133 14.2067 41.8724 13.8887C42.2314 13.5707 42.4109 13.1142 42.4109 12.5192C42.4109 11.9037 42.2314 11.4472 41.8724 11.1497C41.5133 10.8419 41.0106 10.688 40.3643 10.688C39.7078 10.688 39.1897 10.847 38.8101 11.1651C38.4306 11.4831 38.2408 11.9345 38.2408 12.5192Z'
                fill='white'
              />
              <path
                d='M47.8451 12.2576C47.8451 12.0319 47.8912 11.8216 47.9835 11.6267C48.0759 11.4215 48.199 11.2471 48.3529 11.1035C48.5067 10.9496 48.6863 10.8316 48.8914 10.7496C49.1069 10.6572 49.3377 10.6111 49.5839 10.6111C49.8096 10.6111 50.0096 10.647 50.184 10.7188C50.3584 10.7804 50.5072 10.8727 50.6303 10.9958C50.7534 11.1189 50.8457 11.2676 50.9073 11.442C50.9791 11.6164 51.015 11.8062 51.015 12.0114V16.397H53.3847V12.2576C53.3847 12.0216 53.4258 11.8062 53.5078 11.6113C53.6002 11.4061 53.7233 11.2266 53.8771 11.0727C54.0413 10.9188 54.2311 10.8009 54.4465 10.7188C54.6619 10.6265 54.8928 10.5803 55.139 10.5803C55.3544 10.5803 55.5544 10.6162 55.7391 10.688C55.934 10.7598 56.0981 10.8624 56.2315 10.9958C56.3649 11.1189 56.4675 11.2676 56.5393 11.442C56.6213 11.6164 56.6624 11.8062 56.6624 12.0114V16.397H59.0321V11.3497C59.0321 10.8778 58.9706 10.4623 58.8475 10.1033C58.7244 9.73397 58.5397 9.42621 58.2935 9.18C58.0575 8.93379 57.76 8.74914 57.401 8.62604C57.0522 8.50293 56.6419 8.44138 56.17 8.44138C55.934 8.44138 55.6519 8.4978 55.3236 8.61065C55.0056 8.71323 54.703 8.90815 54.4157 9.19539C54.1285 9.47237 53.8823 9.8622 53.6771 10.3649C53.4822 10.8573 53.3847 11.4882 53.3847 12.2576C53.3847 11.4882 53.2821 10.8573 53.077 10.3649C52.8718 9.8622 52.6205 9.47237 52.323 9.19539C52.0255 8.90815 51.7074 8.71323 51.3689 8.61065C51.0406 8.4978 50.7431 8.44138 50.4764 8.44138C50.2507 8.44138 49.984 8.4978 49.6762 8.61065C49.3685 8.71323 49.0812 8.89789 48.8145 9.16461C48.5478 9.43134 48.317 9.79039 48.122 10.2418C47.9374 10.6932 47.8451 11.2676 47.8451 11.9652V8.70298H45.4753V16.397H47.8451V12.2576Z'
                fill='white'
              />
              <path
                d='M63.1509 7.70276H64.9667V5.62538H62.2276C61.7865 5.62538 61.407 5.66641 61.0889 5.74848C60.7812 5.82029 60.5298 5.92801 60.3349 6.07163C60.1503 6.20499 60.0118 6.37426 59.9195 6.57943C59.8374 6.77435 59.7963 6.98978 59.7963 7.22573C59.7963 7.71814 59.9861 8.1131 60.3657 8.4106C60.7453 8.69785 61.3659 8.84147 62.2276 8.84147H59.7963V10.7804H61.212V16.397H63.5356V10.7804H64.9667V8.84147H63.1509C62.8124 8.84147 62.5098 8.80556 62.243 8.73375C61.9763 8.65168 61.8429 8.49267 61.8429 8.25672C61.8429 8.02077 61.9609 7.87202 62.1969 7.81047C62.4431 7.73866 62.7611 7.70276 63.1509 7.70276Z'
                fill='white'
              />
              <path
                d='M65.9168 8.71836H68.2865V16.397H65.9168V8.71836ZM67.0863 7.5181C66.7067 7.5181 66.3836 7.395 66.1168 7.14879C65.8604 6.89232 65.7321 6.56917 65.7321 6.17935C65.7321 5.78952 65.8604 5.4715 66.1168 5.22529C66.3836 4.96882 66.7067 4.84059 67.0863 4.84059C67.4659 4.84059 67.7839 4.96882 68.0403 5.22529C68.2968 5.48176 68.425 5.79978 68.425 6.17935C68.425 6.55892 68.2968 6.87693 68.0403 7.1334C67.7941 7.38987 67.4761 7.5181 67.0863 7.5181Z'
                fill='white'
              />
              <rect
                x='1.27502'
                y='0.5'
                width='75.45'
                height='21'
                rx='10.5'
                stroke='white'
              />
            </svg>`
            : `<svg width="78" height="22" viewBox="0 0 78 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4659 3.3H11.8436V7.5463L8.8466 4.54927L6.99237 6.4035L10.0076 9.41876H5.72498V12.041H10.0079L6.99244 15.0565L8.84667 16.9108L11.8436 13.9138V18.1596H14.4659V13.877L17.4997 16.9108L19.3539 15.0566L16.3384 12.041H20.5846V9.41876H16.3387L19.354 6.40346L17.4998 4.54923L14.4659 7.58308V3.3Z" fill="black"/>
<path d="M29.6614 16.397C28.7895 16.397 28.0098 16.279 27.3225 16.043C26.6351 15.7968 26.0504 15.4429 25.5682 14.9813C25.0963 14.5196 24.7322 13.9554 24.4757 13.2886C24.2295 12.6218 24.1064 11.8678 24.1064 11.0266C24.1064 10.1854 24.2397 9.43134 24.5065 8.76453C24.7732 8.09771 25.1528 7.53349 25.6452 7.07185C26.1376 6.59995 26.7275 6.2409 27.4148 5.99469C28.1124 5.74848 28.892 5.62538 29.7538 5.62538C30.4001 5.62538 31.0258 5.69719 31.6311 5.84081C32.2466 5.97417 32.8006 6.19473 33.293 6.50249C33.7854 6.81025 34.1958 7.21034 34.524 7.70276C34.8626 8.18491 35.078 8.76966 35.1703 9.45699H32.7544C32.6724 9.16974 32.5185 8.92354 32.2928 8.71836C32.0774 8.51319 31.8209 8.34392 31.5234 8.21056C31.2362 8.0772 30.9335 7.97974 30.6155 7.91819C30.2975 7.85664 29.9949 7.82586 29.7076 7.82586C29.1742 7.82586 28.7074 7.89767 28.3073 8.04129C27.9175 8.18491 27.5892 8.39522 27.3225 8.6722C27.0557 8.93892 26.8557 9.27233 26.7223 9.67242C26.589 10.0622 26.5223 10.5085 26.5223 11.0112C26.5223 11.5036 26.589 11.9498 26.7223 12.3499C26.8557 12.7398 27.0557 13.0732 27.3225 13.3501C27.5995 13.6271 27.9329 13.8374 28.3227 13.9811C28.7228 14.1247 29.1844 14.1965 29.7076 14.1965C29.9949 14.1965 30.3026 14.1657 30.6309 14.1042C30.9592 14.0323 31.2669 13.9298 31.5542 13.7964C31.8517 13.6528 32.1133 13.4784 32.339 13.2732C32.5749 13.068 32.7339 12.8218 32.816 12.5346H35.1857C35.0729 13.2219 34.8421 13.8118 34.4933 14.3042C34.1547 14.7864 33.7341 15.1864 33.2315 15.5045C32.7288 15.8122 32.1697 16.0379 31.5542 16.1815C30.9386 16.3252 30.3077 16.397 29.6614 16.397Z" fill="black"/>
<path d="M35.9479 12.5346C35.9479 11.201 36.3326 10.2213 37.102 9.59548C37.8817 8.95944 38.9691 8.64142 40.3643 8.64142C41.7389 8.64142 42.8058 8.94918 43.565 9.5647C44.3241 10.17 44.7037 11.1599 44.7037 12.5346C44.7037 13.8272 44.319 14.7966 43.5496 15.4429C42.7802 16.0789 41.7184 16.397 40.3643 16.397C39.718 16.397 39.123 16.32 38.5793 16.1661C38.0458 16.002 37.5842 15.7609 37.1943 15.4429C36.8045 15.1146 36.4968 14.7094 36.2711 14.2273C36.0556 13.7451 35.9479 13.1809 35.9479 12.5346ZM38.2407 12.5192C38.2407 12.8577 38.2869 13.145 38.3792 13.3809C38.4715 13.6169 38.6049 13.8118 38.7793 13.9657C38.964 14.1093 39.1897 14.2119 39.4564 14.2734C39.7231 14.335 40.0257 14.3658 40.3643 14.3658C41.0106 14.3658 41.5132 14.2067 41.8723 13.8887C42.2313 13.5707 42.4109 13.1142 42.4109 12.5192C42.4109 11.9037 42.2313 11.4472 41.8723 11.1497C41.5132 10.8419 41.0106 10.688 40.3643 10.688C39.7077 10.688 39.1897 10.847 38.8101 11.1651C38.4305 11.4831 38.2407 11.9345 38.2407 12.5192Z" fill="black"/>
<path d="M47.845 12.2576C47.845 12.0319 47.8912 11.8216 47.9835 11.6267C48.0758 11.4215 48.1989 11.2471 48.3528 11.1035C48.5067 10.9496 48.6862 10.8316 48.8914 10.7496C49.1068 10.6572 49.3376 10.6111 49.5838 10.6111C49.8095 10.6111 50.0096 10.647 50.184 10.7188C50.3584 10.7804 50.5071 10.8727 50.6302 10.9958C50.7533 11.1189 50.8457 11.2676 50.9072 11.442C50.979 11.6164 51.0149 11.8062 51.0149 12.0114V16.397H53.3847V12.2576C53.3847 12.0216 53.4257 11.8062 53.5078 11.6113C53.6001 11.4061 53.7232 11.2266 53.8771 11.0727C54.0412 10.9188 54.231 10.8009 54.4464 10.7188C54.6619 10.6265 54.8927 10.5803 55.1389 10.5803C55.3543 10.5803 55.5544 10.6162 55.739 10.688C55.9339 10.7598 56.0981 10.8624 56.2314 10.9958C56.3648 11.1189 56.4674 11.2676 56.5392 11.442C56.6213 11.6164 56.6623 11.8062 56.6623 12.0114V16.397H59.0321V11.3497C59.0321 10.8778 58.9705 10.4623 58.8474 10.1033C58.7243 9.73397 58.5396 9.42621 58.2934 9.18C58.0575 8.93379 57.76 8.74914 57.4009 8.62604C57.0521 8.50293 56.6418 8.44138 56.1699 8.44138C55.9339 8.44138 55.6518 8.4978 55.3236 8.61065C55.0055 8.71323 54.7029 8.90815 54.4157 9.19539C54.1284 9.47237 53.8822 9.8622 53.677 10.3649C53.4821 10.8573 53.3847 11.4882 53.3847 12.2576C53.3847 11.4882 53.2821 10.8573 53.0769 10.3649C52.8717 9.8622 52.6204 9.47237 52.3229 9.19539C52.0254 8.90815 51.7074 8.71323 51.3688 8.61065C51.0406 8.4978 50.7431 8.44138 50.4763 8.44138C50.2506 8.44138 49.9839 8.4978 49.6762 8.61065C49.3684 8.71323 49.0812 8.89789 48.8144 9.16461C48.5477 9.43134 48.3169 9.79039 48.122 10.2418C47.9373 10.6932 47.845 11.2676 47.845 11.9652V8.70298H45.4752V16.397H47.845V12.2576Z" fill="black"/>
<path d="M63.1509 7.70276H64.9667V5.62538H62.2276C61.7865 5.62538 61.4069 5.66641 61.0889 5.74848C60.7811 5.82029 60.5298 5.92801 60.3349 6.07163C60.1502 6.20499 60.0117 6.37426 59.9194 6.57943C59.8373 6.77435 59.7963 6.98978 59.7963 7.22573C59.7963 7.71814 59.9861 8.1131 60.3656 8.4106C60.7452 8.69785 61.3659 8.84147 62.2276 8.84147H59.7963V10.7804H61.212V16.397H63.5356V10.7804H64.9667V8.84147H63.1509C62.8123 8.84147 62.5097 8.80556 62.243 8.73375C61.9763 8.65168 61.8429 8.49267 61.8429 8.25672C61.8429 8.02077 61.9609 7.87202 62.1968 7.81047C62.443 7.73866 62.761 7.70276 63.1509 7.70276Z" fill="black"/>
<path d="M65.9167 8.71836H68.2865V16.397H65.9167V8.71836ZM67.0862 7.5181C66.7067 7.5181 66.3835 7.395 66.1168 7.14879C65.8603 6.89232 65.7321 6.56917 65.7321 6.17935C65.7321 5.78952 65.8603 5.4715 66.1168 5.22529C66.3835 4.96882 66.7067 4.84059 67.0862 4.84059C67.4658 4.84059 67.7838 4.96882 68.0403 5.22529C68.2967 5.48176 68.425 5.79978 68.425 6.17935C68.425 6.55892 68.2967 6.87693 68.0403 7.1334C67.7941 7.38987 67.4761 7.5181 67.0862 7.5181Z" fill="black"/>
<rect x="1.27496" y="0.5" width="75.45" height="21" rx="10.5" stroke="black"/>
</svg>
`
        }
        </span>
        `
    );
  }
}

function ComfiModal({ id = "", url = "" }) {
  const comfiModal = document.getElementById(id);
  const body = document.body;
  const modalContent = `<div  id="container-modal-wrapper" class="container-modal-wrapper"><div class="container-modal-wrapper-container">
      <div class="container-modal">
      <div class="close-btn-wrap">
      <div class="close-btn" id="comfi-modal-close">
             <img src="https://unpkg.com/comfi-badges@latest/assets/close-icon.png" alt="close icon" />
           </div>
      </div>
      <div class="banner-container">
        <div class="banner">
          <div class="banner-top">
            <img src="https://unpkg.com/comfi-badges@latest/assets/comfi-logo-color.png" alt="comfi" class="logo" />
          </div>
          <div class="banner-body">
            <h1 class="banner-body-h1">
              Buy now, pay later – <span>for your business</span>
            </h1>
            <img src="https://unpkg.com/comfi-badges@latest/assets/Frame.png" alt="frame" class="body-frame" />
          </div>
          <div class="body-footer">
            <div class="body-footer-body">
              <div class="body-footer-glass"></div>
              <img src="https://unpkg.com/comfi-badges@latest/assets/Layout.png" alt="layout" />
            </div>
          </div>
        </div>
      </div>
      <div class="container-center">
        <div class="section-two">
          <h1>What is Comfi?</h1>
          <p>
           Comfi lets you get the products you need today and pay later – in 30, 45, or 60 days. It’s a simple, flexible payment solution that gives you control over your cash flow without delaying important purchases. No upfront payment, no hassle.
          </p>
        </div>
        <div class="section-three">
          <h1>What is Comfi?</h1>
          <div class="section-three-container">
            <div class="section-three-container-block">
              <h2>Sign Up in Comfi</h2>
              <p>Register an account with Comfi and submit:</p>
              <div class="section-three-container-block-flex">
                <div>Bank Statement</div>
                <div>Bank details</div>
                <div>Trade license number</div>
              </div>
            </div>
            <div class="line"></div>
            <div class="section-three-container-block">
              <h2>Get approved</h2>
              <p>You will receive a notification in 24h</p>
            </div>
            <div class="line"></div>
            <div class="section-three-container-block">
              <h2>Get your supplies</h2>
              <p>Supplier delivers your goods</p>
            </div>
            <div class="line"></div>
            <div class="section-three-container-block">
              <h2>Pay in 30-60d</h2>
              <p>You pay to Comfi in 30-60d</p>
            </div>
              <img
              src="https://unpkg.com/comfi-badges@latest/assets/Group 1000011013.png"
              alt="img"
              class="bg-rectangle"
            />
          </div>
        </div>
        <div class="benefits">
          <h1>Benefits</h1>
          <div class="benefits-container">
            <div class="benefits-block">
              <img src="https://unpkg.com/comfi-badges@latest/assets/Icon.png" alt="up" />
              <h2>Leverage</h2>
              <p>Up to 1,000,000 AED</p>
            </div>
            <div class="benefits-block">
              <img src="https://unpkg.com/comfi-badges@latest/assets/Icon_2.png" alt="up" />
              <h2>Ease</h2>
              <p>Approval in 1 day</p>
            </div>
            <div class="benefits-block">
              <img src="https://unpkg.com/comfi-badges@latest/assets/Icon_3.png" alt="up" />
              <h2>Shariah Compliant</h2>
              <p>Zero interest</p>
            </div>
            <div class="benefits-block">
              <img src="https://unpkg.com/comfi-badges@latest/assets/Icon_4.png" alt="up" />
              <h2>Flexibility</h2>
              <p>Pay in 30-60 days</p>
            </div>

          </div>
        </div>
 <div  class="comfi-modal-start-btn">
          <a
            href="${url}"
            target="_blank"
            style="
              width: 100%;
              height: 100%;
              padding-left: 32px;
              padding-right: 32px;
              padding-top: 8px;
              padding-bottom: 8px;
              background: #318170;
              border-radius: 12px;
              justify-content: center;
              align-items: center;
              gap: 8px;
              display: inline-flex;
              margin: 28px auto;
              max-width: 334px;
              text-decoration: none;
            "
          >
            <div
              class="Lable"
              style="
                text-align: center;
                color: white;
                font-size: 18px;
                font-family: Aeonik;
                font-weight: 500;
                line-height: 26px;
                letter-spacing: 0.18px;
                word-wrap: break-word;
              "
            >
              Start now
            </div>
          </a>
        </div>
        <div class="footer">
          <img src="https://unpkg.com/comfi-badges@latest/assets/Group 1000010935.png" alt="" />
          <img src="https://unpkg.com/comfi-badges@latest/assets/image 221 (Traced).png" alt="" />
          <img src="https://unpkg.com/comfi-badges@latest/assets/footer-img-3.png" alt="" />
          <img
            src="https://unpkg.com/comfi-badges@latest/assets/Al_Etihad_Credit_Bureau_Logo 1 (Traced).png"
            alt=""
          />
        </div>
      </div>
    </div><div  class="comfi-modal-start-btn-mobile">
          <a
            href="${url}"
            target="_blank"
            style="
              width: 100%;
              height: 100%;
              padding-left: 32px;
              padding-right: 32px;
              padding-top: 8px;
              padding-bottom: 8px;
              background: #318170;
              border-radius: 12px;
              justify-content: center;
              align-items: center;
              gap: 8px;
              display: inline-flex;
              margin: 28px auto;
              max-width: 334px;
              text-decoration: none;
            "
          >
            <div
              class="Lable"
              style="
                text-align: center;
                color: white;
                font-size: 18px;
                font-family: Aeonik;
                font-weight: 500;
                line-height: 26px;
                letter-spacing: 0.18px;
                word-wrap: break-word;
              "
            >
              Start now
            </div>
          </a>
        </div></div></div>`;
  const modalBanner = ` <div id="modal-banner-uniq" class="comfi-modal-banner">
      <div class="comfi-modal-banner-container">
        <div class="comfi-modal-banner-text">
          <span>
            Buy now pay later with
            <img src="https://unpkg.com/comfi-badges@latest/assets/comfi-logo-color-green.png" alt="" />.</span
          >
          <span> Up to AED 1,000.000</span>
        </div>
        <div id="comfi-banner-modal-btn" class="comfi-modal-banner-btn">Apply now</div>
      </div>
    </div>`;
  if (comfiModal) {
    const modalBannerUniq = document.getElementById("modal-banner-uniq");
    const containerModalContent = document.getElementById(
      "container-modal-wrapper"
    );
    if (!containerModalContent && !modalBannerUniq) {
      body.insertAdjacentHTML("afterbegin", modalContent);
      comfiModal.insertAdjacentHTML("afterbegin", modalBanner);
      const closeBtn = document.getElementById("comfi-modal-close");
      const comfiBannerModalBtn = document.getElementById(
        "comfi-banner-modal-btn"
      );
      const close = () => {
        body.classList.toggle("comfi-modal-open");
      };

      console.log(closeBtn, comfiBannerModalBtn);
      comfiBannerModalBtn.addEventListener("click", close);
      closeBtn.addEventListener("click", close);
    }
  }
}

window.ComfiBadges = ComfiBadges;
window.ComfiBanner = ComfiBanner;
window.ComfiModal = ComfiModal;
