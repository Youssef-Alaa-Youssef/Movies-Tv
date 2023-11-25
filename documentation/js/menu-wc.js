'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movies-tv documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-01f79340a864d18223a3303d2de712232e59ad043abce0c240d9f713f4f733928b6d5a35122da256cb9f62211146e8d267e39dde8328cf6f08f73867c3d6b4bc"' : 'data-bs-target="#xs-components-links-module-AppModule-01f79340a864d18223a3303d2de712232e59ad043abce0c240d9f713f4f733928b6d5a35122da256cb9f62211146e8d267e39dde8328cf6f08f73867c3d6b4bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-01f79340a864d18223a3303d2de712232e59ad043abce0c240d9f713f4f733928b6d5a35122da256cb9f62211146e8d267e39dde8328cf6f08f73867c3d6b4bc"' :
                                            'id="xs-components-links-module-AppModule-01f79340a864d18223a3303d2de712232e59ad043abce0c240d9f713f4f733928b6d5a35122da256cb9f62211146e8d267e39dde8328cf6f08f73867c3d6b4bc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-2d0fc68d3d8201d1d0972933abe04232528a3b3fada3057c8043ab741cb1e70e5d4bf73284aa0411d29c011494b574b1b31d1e4c1a476c059e1f69e88690860d"' : 'data-bs-target="#xs-components-links-module-AppServerModule-2d0fc68d3d8201d1d0972933abe04232528a3b3fada3057c8043ab741cb1e70e5d4bf73284aa0411d29c011494b574b1b31d1e4c1a476c059e1f69e88690860d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-2d0fc68d3d8201d1d0972933abe04232528a3b3fada3057c8043ab741cb1e70e5d4bf73284aa0411d29c011494b574b1b31d1e4c1a476c059e1f69e88690860d"' :
                                            'id="xs-components-links-module-AppServerModule-2d0fc68d3d8201d1d0972933abe04232528a3b3fada3057c8043ab741cb1e70e5d4bf73284aa0411d29c011494b574b1b31d1e4c1a476c059e1f69e88690860d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-cd7b407f84247ae114010302d5541ef87b1295824fd5e8cc830c1456cf99fd184fa862cd23191f329f8ee3fd7925a8734db0a2885fa7018f40bf36f8f377992e"' : 'data-bs-target="#xs-components-links-module-AuthModule-cd7b407f84247ae114010302d5541ef87b1295824fd5e8cc830c1456cf99fd184fa862cd23191f329f8ee3fd7925a8734db0a2885fa7018f40bf36f8f377992e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-cd7b407f84247ae114010302d5541ef87b1295824fd5e8cc830c1456cf99fd184fa862cd23191f329f8ee3fd7925a8734db0a2885fa7018f40bf36f8f377992e"' :
                                            'id="xs-components-links-module-AuthModule-cd7b407f84247ae114010302d5541ef87b1295824fd5e8cc830c1456cf99fd184fa862cd23191f329f8ee3fd7925a8734db0a2885fa7018f40bf36f8f377992e"' }>
                                            <li class="link">
                                                <a href="components/ChangepassworsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangepassworsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TwostepverificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TwostepverificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesContentModule.html" data-type="entity-link" >MoviesContentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MoviesContentModule-da1c7a2ef0d2fbc17750aac16771be60ac5b4c776ae73652a3f6f9806d2ea8d6e11c1381856f048b6790ad5220736a81f79f751b3ec2340a72f83f51d2b4cc96"' : 'data-bs-target="#xs-components-links-module-MoviesContentModule-da1c7a2ef0d2fbc17750aac16771be60ac5b4c776ae73652a3f6f9806d2ea8d6e11c1381856f048b6790ad5220736a81f79f751b3ec2340a72f83f51d2b4cc96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MoviesContentModule-da1c7a2ef0d2fbc17750aac16771be60ac5b4c776ae73652a3f6f9806d2ea8d6e11c1381856f048b6790ad5220736a81f79f751b3ec2340a72f83f51d2b4cc96"' :
                                            'id="xs-components-links-module-MoviesContentModule-da1c7a2ef0d2fbc17750aac16771be60ac5b4c776ae73652a3f6f9806d2ea8d6e11c1381856f048b6790ad5220736a81f79f751b3ec2340a72f83f51d2b4cc96"' }>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesreactsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesreactsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopMoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopMoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopTvComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopTvComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesContentRoutingModule.html" data-type="entity-link" >MoviesContentRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesService.html" data-type="entity-link" >CoursesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikesDislikesService.html" data-type="entity-link" >LikesDislikesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslateService.html" data-type="entity-link" >TranslateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MoviesInterceptor.html" data-type="entity-link" >MoviesInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/MyInterceptor.html" data-type="entity-link" >MyInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});