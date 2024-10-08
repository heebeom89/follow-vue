<template>
    <header id="header" role="banner">
        <div class="header__inner">
            <h1 class="header__logo">
                <a href="#">portfolio<em>vue.js</em></a>
            </h1>
            <nav class="header__nav" role="navigation" aria-label="메인 메뉴">
                <ul>
                    <li><a href="#intro">intro</a></li>
                    <li><a href="#skill">skill</a></li>
                    <li><a href="#site">site</a></li>
                    <li><a href="#port">portfolio</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
            <div class="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded="false" role="button" tabindex="0">
                <span></span>
            </div>
        </div>
    </header>
</template>
