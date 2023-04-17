const getAllAttributes = (el) =>
  el.getAttributeNames().reduce(
    (obj, name) => ({
      ...obj,
      [name]: el.getAttribute(name),
    }),
    {}
  );

// if (comfiBanner) {
//   const { data_style } = getAllAttributes(comfiBanner);
//   comfiBanner.classList.add(`style_${data_style}`);
//   comfiBanner.insertAdjacentHTML(
//     "afterbegin",
//     `Pay only $${100 / 4} today
//       <span
//         ><svg
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M9.19847 2.03751C8.4889 2.10843 7.54134 2.35403 6.87568 2.63954C3.27701 4.18314 1.31869 8.0575 2.21864 11.8531C2.33334 12.3368 2.52983 12.9023 2.73249 13.3319C2.82281 13.5234 2.8967 13.6993 2.8967 13.7228C2.8967 13.7463 2.69247 14.528 2.4429 15.4599C1.93953 17.3392 1.93933 17.3405 2.12155 17.6353C2.23925 17.8256 2.47558 17.976 2.68927 17.9966C2.81864 18.009 3.16387 17.9273 4.54199 17.5582C5.47352 17.3087 6.25751 17.1045 6.28418 17.1045C6.31086 17.1045 6.43356 17.1551 6.55689 17.2168C7.44117 17.6596 8.62204 17.9517 9.69861 17.9939C12.989 18.1229 16.0462 16.1878 17.3504 13.1506C19.0302 9.23886 17.3413 4.70489 13.4997 2.81306C12.1967 2.17141 10.6495 1.89243 9.19847 2.03751ZM10.5821 3.58391C10.9972 3.60951 11.6088 3.73898 12.0833 3.9018C13.4586 4.3736 14.6041 5.26935 15.4078 6.50156C16.7843 8.61195 16.7874 11.3798 15.4155 13.4947C14.1334 15.4713 11.924 16.5826 9.57144 16.4344C8.71913 16.3806 7.94215 16.1657 7.09124 15.7483C6.63968 15.5268 6.55999 15.4983 6.39768 15.4997C6.27441 15.5008 5.83196 15.605 5.04797 15.8174C4.40652 15.9912 3.87894 16.1306 3.87564 16.1272C3.87231 16.1237 4.01194 15.5958 4.18589 14.9539C4.40292 14.1531 4.50235 13.7294 4.50278 13.6036C4.50335 13.4422 4.47331 13.3589 4.25305 12.91C3.70703 11.7975 3.50234 10.8027 3.56875 9.58429C3.66365 7.84284 4.54519 6.12559 5.91188 5.01994C6.75035 4.34159 7.70372 3.88846 8.73097 3.68007C9.15102 3.59484 9.80594 3.53566 10.1154 3.555C10.2071 3.56073 10.4171 3.57374 10.5821 3.58391ZM9.71528 5.37284C9.50245 5.48858 9.39332 5.59037 9.31627 5.74498L9.23181 5.9145L9.23254 8.73372C9.23325 11.3969 9.23668 11.5604 9.29446 11.6864C9.42417 11.9691 9.6831 12.1365 9.99082 12.1365C10.331 12.1365 10.6115 11.9428 10.7304 11.6258C10.7541 11.5626 10.7653 10.6156 10.7648 8.72502C10.7641 6.06941 10.7608 5.91086 10.7027 5.78469C10.5664 5.48878 10.3213 5.334 9.99169 5.33557C9.87633 5.33613 9.75196 5.3529 9.71528 5.37284ZM9.71371 13.1476C9.45411 13.2477 9.25755 13.4393 9.16699 13.6807C9.10411 13.8484 9.12478 14.1706 9.21017 14.354C9.35708 14.6695 9.64029 14.8463 9.99869 14.8463C10.5047 14.8463 10.8655 14.4813 10.8645 13.9703C10.864 13.704 10.7888 13.525 10.6005 13.3422C10.3797 13.128 9.98786 13.042 9.71371 13.1476Z"
//             fill="currentColor"
//           />
//         </svg>
//       </span>`
//   );
// }

const monthPrice = (price, plan) => {
  return Math.round((price * 100) / plan) / 100;
};

console.log("first");
function Comfi({
  currency = "SAR",
  price = 100,
  plan = 4,
  style = 3,
  logo = false,
  id = "",
}) {
  const comfiBanner = document.getElementById(id);
  console.log(id);
  if (comfiBanner) {
    comfiBanner.classList.add("comfi-badges");
    comfiBanner.classList.add(`style_${logo ? "3" : style}`);
    comfiBanner.insertAdjacentHTML(
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

export default Comfi;
