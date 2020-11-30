<template>
//   <header
//     class="header"
//     :class="$route.name == 'signup' ? 'header-signup' : ''"
//   >
//     <div class="header-inner">
//       <div class="flex-header">
//         <nuxt-link
//           v-if="!isCatalogRoute()"
//           to="/"
//           class="header-logo"
//           :class="{ 'header-logo--light': $route.name === 'signup' }"
//         >
//           <SvgIconLogo />
//         </nuxt-link>
//         <div class="header-empty-logo" v-else />

//         <div class="flex-menu">
//           <header-search />

//           <div class="header-nav">
//             <input id="menu-btn" class="menu-btn" type="checkbox" />
//             <label class="menu-icon" for="menu-btn">
//               <span class="navicon" />
//             </label>
//             <ul class="menu">
//               <li @click="hideMenu()">
//                 <nuxt-link :to="'/textures'"> Textures </nuxt-link>
//               </li>
//               <li @click="hideMenu()">
//                 <nuxt-link :to="'/models'"> Models </nuxt-link>
//               </li>
//               <li @click="hideMenu()">
//                 <nuxt-link :to="'/hdr'"> Hdris </nuxt-link>
//               </li>
//               <li @click="hideMenu()">
//                 <nuxt-link :to="'/brands'"> Brands </nuxt-link>
//               </li>
//               <li class="line" @click="hideMenu()">
//                 <nuxt-link to="/content/about"> About </nuxt-link>
//               </li>
//               <li @click="hideMenu()">
//                 <nuxt-link :to="{ path: '/', hash: '#services' }">
//                   Services
//                 </nuxt-link>
//               </li>
//               <li @click="hideMenu()">
//                 <nuxt-link to="/pricing"> Pricing </nuxt-link>
//               </li>
//               <li v-if="!getIsLogged()" @click="hideMenu()">
//                 <nuxt-link to="/login"> Log In </nuxt-link>
//               </li>
//               <li
//                 v-if="!getIsLogged()"
//                 class="header-button"
//                 @click="hideMenu()"
//               >
//                 <nuxt-link to="/signup"> Sign Up </nuxt-link>
//               </li>
//               <li v-if="getIsLogged()" class="header-account">
//                 <a
//                   class="icon"
//                   @click="showAccount('again')"
//                   @mouseover="hover = true"
//                   @mouseleave="trigger()"
//                   >Account</a
//                 >
//                 <div
//                   v-if="account || hover"
//                   v-click-outside="externalClick"
//                   class="missing"
//                   @mouseover="trigger('on')"
//                   @mouseleave="hover = false"
//                 >
//                   <div class="logmenu">
//                     <div class="logmenu-top">
//                       <p>{{ credits }} Subscription Credits</p>
//                       <p>{{ profile }}</p>
//                     </div>
//                     <ul>
//                       <li>
//                         <nuxt-link :to="'/profile'"> What's new </nuxt-link>
//                       </li>
//                       <li>
//                         <nuxt-link :to="'/profile/dashboard'">
//                           Profile
//                         </nuxt-link>
//                       </li>
//                       <li>
//                         <nuxt-link :to="'/textures?assets=true'">
//                           My assests
//                         </nuxt-link>
//                       </li>
//                       <li>
//                         <nuxt-link :to="'/profile/invoices'">
//                           My invoices
//                         </nuxt-link>
//                       </li>
//                       <li>
//                         <nuxt-link :to="'/profile/discount'">
//                           Discount code
//                         </nuxt-link>
//                       </li>
//                       <li>
//                         <nuxt-link :to="'/profile/pricing'">
//                           Pricing
//                         </nuxt-link>
//                       </li>
//                       <li class="logout">
//                         <a @click="logout">Log out</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <ul v-if="getIsLogged()" class="no-menu">
//                 <li class="mobile-menu" @click="hideMenu()">Account</li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/profile'"> What's new </nuxt-link>
//                 </li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/profile/dashboard'"> Profile </nuxt-link>
//                 </li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/textures?assets=true'">
//                     My assests
//                   </nuxt-link>
//                 </li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/profile/invoices'"> My invoices </nuxt-link>
//                 </li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/profile/discount'">
//                     Discount code
//                   </nuxt-link>
//                 </li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/profile/pricing'"> Pricing </nuxt-link>
//                 </li>
//                 <li @click="hideMenu()">
//                   <nuxt-link :to="'/bookmarked'"> Bookmarks </nuxt-link>
//                 </li>
//                 <li class="logout">
//                   <a @click="logout">Log out</a>
//                 </li>
//               </ul>
//               <li
//                 v-if="getIsLogged()"
//                 style="cursor: pointer"
//                 class="header-fav view-mobile"
//                 @click="toBookmarks"
//               >
//                 <span>{{ counts }}</span>
//                 <a href="/bookmarked">a</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </header>
// </template>

