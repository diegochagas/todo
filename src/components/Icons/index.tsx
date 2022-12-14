interface IProps {
  name: 'clipboard' | 'trash' | 'rocket' | 'plus' | 'checked'
}

function Icons({ name }: IProps) {
  if (name === 'clipboard') {
    return (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="56" height="56" fill="url(#pattern0)"/>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_43_191" transform="scale(0.01)"/>
            </pattern>
            
            <image id="image0_43_191" width="100" height="100" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    );
  } else if (name === 'trash') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2021 9.98548H12.8716V15.5073H14.2021V9.98548Z" fill="#808080"/>

        <path d="M11.4624 9.98548H10.1318V15.5073H11.4624V9.98548Z" fill="#808080"/>
        
        <path d="M18.478 7.16712C18.4754 7.03061 18.4295 6.89846 18.3469 6.78975C18.2642 6.68104 18.1492 6.6014 18.0184 6.56232C17.9596 6.53782 17.8974 6.52252 17.8339 6.51696H14.2868C14.1525 6.07791 13.8808 5.69355 13.5117 5.42047C13.1426 5.14739 12.6956 5 12.2365 5C11.7774 5 11.3304 5.14739 10.9613 5.42047C10.5922 5.69355 10.3205 6.07791 10.1862 6.51696H6.63911C6.58068 6.51814 6.52269 6.52729 6.46674 6.54418H6.45162C6.31318 6.58701 6.19334 6.67547 6.11163 6.79515C6.02992 6.91483 5.99117 7.05866 6.00169 7.20319C6.01222 7.34771 6.0714 7.48441 6.16958 7.59099C6.26776 7.69757 6.39916 7.76774 6.54234 7.79006L7.25298 17.5334C7.26382 17.9127 7.41693 18.2741 7.68191 18.5458C7.94688 18.8175 8.30435 18.9797 8.68332 19H15.7867C16.1662 18.9804 16.5244 18.8186 16.79 18.5468C17.0556 18.2751 17.2092 17.9132 17.22 17.5334L17.9277 7.79914C18.0802 7.77797 18.22 7.70232 18.3212 7.58615C18.4223 7.46999 18.478 7.32116 18.478 7.16712ZM12.2365 6.21456C12.3661 6.21458 12.4943 6.24146 12.6129 6.29351C12.7316 6.34556 12.8382 6.42164 12.926 6.51696H11.547C11.6346 6.42135 11.7411 6.34507 11.8599 6.29299C11.9786 6.24092 12.1069 6.21421 12.2365 6.21456ZM15.7867 17.7904H8.68332C8.60168 17.7904 8.47467 17.6573 8.45955 17.4457L7.75798 7.81123H16.715L16.0135 17.4457C15.9984 17.6573 15.8714 17.7904 15.7867 17.7904Z" fill="#808080"/>
      </svg>
    )
  } else if (name === 'rocket') {
    return (
      <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_43_111)">
          <path d="M11.0215 2.93302C14.1472 6.9011 15.8158 11.7944 15.7553 16.8155V18.0141L16.7865 18.6416C18.119 19.4482 19.1127 20.6993 19.5866 22.1669C19.1705 21.8605 18.7352 21.5803 18.2833 21.3278L15.5333 19.7838L15.0391 22.9001C14.9963 23.1755 14.9389 23.4485 14.8672 23.718H7.16151C7.04692 23.3655 6.95382 23.0129 6.86789 22.6463L6.24484 19.8261L3.70968 21.2362C3.28615 21.473 2.87723 21.7344 2.48507 22.0188C2.96824 20.5682 3.94123 19.3242 5.24224 18.4935L6.22336 17.866V16.7521C6.24106 11.7513 7.92967 6.89523 11.0287 2.93302H11.0215ZM11.0287 0C10.868 0.000390307 10.7128 0.0579856 10.5918 0.162162L10.5274 0.218566C6.39778 4.76564 4.10466 10.6454 4.08208 16.745C2.32967 17.8643 1.03251 19.5543 0.417263 21.5197C-0.197979 23.485 -0.0921719 25.6007 0.716194 27.4971C1.56776 25.6455 2.99131 24.1058 4.7839 23.0975C4.96368 23.8642 5.2031 24.6161 5.50005 25.3467C5.53771 25.4871 5.62118 25.6114 5.73763 25.7006C5.85408 25.7898 5.99706 25.8388 6.14458 25.8402H16.0847C16.2852 25.8402 16.4857 25.6498 16.586 25.3537C16.8758 24.6592 17.0778 23.9322 17.1875 23.1892C18.9836 24.1932 20.4083 25.7342 21.2553 27.5887C22.1124 25.7017 22.2451 23.5727 21.6287 21.5967C21.0124 19.6206 19.6888 17.9319 17.9037 16.8437C17.9745 10.7082 15.6935 4.77179 11.5157 0.218566C11.4535 0.150085 11.3773 0.0952397 11.2922 0.0575871C11.2071 0.0199344 11.1149 0.000314749 11.0215 0L11.0287 0Z" fill="#4EA8DE"/>

          <path d="M11.0216 16.1598C10.4715 16.1598 9.93376 15.9995 9.47611 15.699C9.01846 15.3986 8.6614 14.9715 8.44993 14.4716C8.23847 13.9716 8.18206 13.4213 8.28782 12.8898C8.39358 12.3584 8.65678 11.8697 9.04423 11.4853C9.43169 11.1009 9.92606 10.838 10.465 10.7298C11.004 10.6216 11.5634 10.6729 12.0728 10.8773C12.5822 11.0816 13.0188 11.4298 13.3275 11.8781C13.6361 12.3263 13.8031 12.8545 13.8074 13.396V13.396C13.8159 13.7469 13.7542 14.0961 13.6256 14.4235C13.4971 14.751 13.3043 15.0503 13.0582 15.3043C12.8121 15.5583 12.5176 15.7622 12.1915 15.9041C11.8654 16.0461 11.5141 16.1234 11.1576 16.1316C11.1126 16.1387 11.0666 16.1387 11.0216 16.1316V16.1598Z" fill="#4EA8DE"/>

          <path d="M14.8959 27.5958C14.7167 27.5901 14.5382 27.6198 14.3708 27.683C14.2034 27.7462 14.0505 27.8416 13.9211 27.9638C13.7917 28.086 13.6884 28.2323 13.6172 28.3943C13.546 28.5563 13.5084 28.7307 13.5066 28.9072V33.067C13.5066 33.4297 13.653 33.7776 13.9135 34.0342C14.1741 34.2907 14.5274 34.4348 14.8959 34.4348C15.2644 34.4348 15.6178 34.2907 15.8783 34.0342C16.1389 33.7776 16.2852 33.4297 16.2852 33.067V28.9636C16.291 28.7877 16.2611 28.6126 16.1973 28.4482C16.1336 28.2839 16.0372 28.1337 15.9139 28.0064C15.7906 27.879 15.6428 27.7772 15.4791 27.7067C15.3154 27.6362 15.139 27.5985 14.9604 27.5958H14.8959Z" fill="#5E60CE"/>

          <path d="M7.16154 27.5958C6.97931 27.5863 6.797 27.613 6.62546 27.6743C6.45392 27.7356 6.29665 27.8302 6.16302 27.9526C6.02939 28.0749 5.92213 28.2225 5.84761 28.3865C5.77309 28.5505 5.73284 28.7275 5.72925 28.9072V33.067C5.72925 33.4297 5.87562 33.7777 6.13617 34.0342C6.39672 34.2907 6.7501 34.4348 7.11857 34.4348C7.48704 34.4348 7.84042 34.2907 8.10097 34.0342C8.36152 33.7777 8.50789 33.4297 8.50789 33.067V28.9636C8.51362 28.7877 8.48373 28.6126 8.41998 28.4482C8.35623 28.2839 8.25989 28.1337 8.13658 28.0064C8.01326 27.879 7.86544 27.7772 7.70173 27.7067C7.53802 27.6362 7.36169 27.5985 7.18302 27.5958H7.16154Z" fill="#5E60CE"/>
          
          <path d="M10.9213 27.5958C10.7426 27.592 10.5649 27.623 10.3984 27.6869C10.2318 27.7507 10.0797 27.8463 9.95068 27.9681C9.82167 28.0899 9.71828 28.2355 9.64644 28.3966C9.5746 28.5577 9.5357 28.7312 9.53198 28.9072V34.6392C9.53198 35.002 9.67836 35.3499 9.93891 35.6064C10.1995 35.8629 10.5528 36.007 10.9213 36.007C11.2898 36.007 11.6432 35.8629 11.9037 35.6064C12.1643 35.3499 12.3106 35.002 12.3106 34.6392V28.9988C12.3164 28.823 12.2865 28.6478 12.2227 28.4835C12.159 28.3191 12.0626 28.1689 11.9393 28.0416C11.816 27.9143 11.6682 27.8124 11.5045 27.7419C11.3408 27.6714 11.1644 27.6337 10.9858 27.631L10.9213 27.5958Z" fill="#5E60CE"/>
        </g>

        <defs>
          <clipPath id="clip0_43_111">
            <rect width="22" height="36" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  } else if (name === 'plus') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2401_11)">
          <path d="M7.98373 1.45158C9.27565 1.45158 10.5386 1.83468 11.6128 2.55244C12.687 3.27019 13.5242 4.29037 14.0186 5.48395C14.513 6.67754 14.6424 7.99092 14.3903 9.25802C14.1383 10.5251 13.5161 11.689 12.6026 12.6026C11.6891 13.5161 10.5252 14.1382 9.25807 14.3903C7.99097 14.6423 6.67759 14.5129 5.484 14.0185C4.29042 13.5241 3.27025 12.6869 2.55249 11.6127C1.83473 10.5385 1.45163 9.2756 1.45163 7.98368C1.45832 6.25332 2.14867 4.59574 3.37223 3.37218C4.59579 2.14862 6.25337 1.45827 7.98373 1.45158ZM7.98373 5.77648e-06C6.40611 0.00645971 4.86578 0.480174 3.55717 1.36134C2.24857 2.24252 1.23037 3.49164 0.631106 4.95102C0.031846 6.4104 -0.121605 8.01461 0.190125 9.56114C0.501855 11.1077 1.26479 12.5272 2.38262 13.6404C3.50044 14.7537 4.92304 15.5108 6.47082 15.8162C8.01861 16.1217 9.62218 15.9617 11.0791 15.3564C12.536 14.7512 13.781 13.7279 14.6568 12.4158C15.5326 11.1036 16 9.5613 16.0001 7.98368C16.0001 6.93249 15.7925 5.89165 15.3892 4.92089C14.986 3.95014 14.395 3.06857 13.6502 2.32679C12.9053 1.58501 12.0214 0.997618 11.049 0.598327C10.0766 0.199035 9.0349 -0.00429452 7.98373 5.77648e-06Z" fill="#F2F2F2"/>
          
          <path d="M11.707 7.38127H8.4954V4.16966H7.41397V7.38127H4.19873V8.4627H7.41397V11.6743H8.4954V8.4627H11.707V7.38127Z" fill="#F2F2F2"/>
        </g>

        <defs>
          <clipPath id="clip0_2401_11">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  } else if (name === 'checked') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.9">
          <path d="M11.9806 19.4261C16.0731 19.4261 19.3908 16.1085 19.3908 12.0159C19.3908 7.92333 16.0731 4.60565 11.9806 4.60565C7.88799 4.60565 4.57031 7.92333 4.57031 12.0159C4.57031 16.1085 7.88799 19.4261 11.9806 19.4261Z" fill="#5E60CE"/>
          
          <path d="M11.9645 4.85955C13.3768 4.85955 14.7573 5.27834 15.9316 6.06294C17.1058 6.84755 18.021 7.96275 18.5615 9.2675C19.1019 10.5723 19.2433 12.008 18.9678 13.3931C18.6923 14.7782 18.0122 16.0505 17.0136 17.0491C16.015 18.0478 14.7427 18.7278 13.3576 19.0033C11.9724 19.2789 10.5367 19.1375 9.23197 18.597C7.92722 18.0566 6.81202 17.1413 6.02742 15.9671C5.24281 14.7928 4.82403 13.4123 4.82403 12C4.83134 10.1085 5.58599 8.29656 6.92351 6.95904C8.26103 5.62152 10.073 4.86687 11.9645 4.85955ZM11.9645 3.27278C10.24 3.27983 8.55616 3.79767 7.12568 4.76091C5.69519 5.72416 4.58215 7.08962 3.92707 8.68493C3.272 10.2802 3.10426 12.0339 3.44502 13.7244C3.78579 15.415 4.61978 16.9667 5.84172 18.1837C7.06366 19.4006 8.61876 20.2283 10.3107 20.5621C12.0026 20.896 13.7556 20.7211 15.3482 20.0595C16.9408 19.3979 18.3017 18.2793 19.2591 16.8449C20.2165 15.4105 20.7275 13.7246 20.7275 12C20.7275 10.851 20.5006 9.71318 20.0598 8.652C19.619 7.59083 18.9729 6.62715 18.1587 5.81628C17.3445 5.00541 16.3782 4.36331 15.3153 3.92683C14.2523 3.49035 13.1136 3.26808 11.9645 3.27278Z" fill="#5E60CE"/>
          
          <path d="M15.4311 9.34209L11.0991 13.674L8.61667 11.1916L7.78076 12.0275L11.0991 15.3458L16.267 10.178L15.4311 9.34209Z" fill="#F2F2F2"/>
        </g>
      </svg>
    )
  }

  return <div/>
}

export default Icons;