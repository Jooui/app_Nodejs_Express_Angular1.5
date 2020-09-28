import angular from 'angular';
let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import ArticleMeta from './article-helpers/article-meta.component';
componentsModule.component('articleMeta', ArticleMeta);

import FavoriteBtn from './buttons/favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

import ArticlePreview from './article-helpers/article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ArticleList from './article-helpers/article-list.component';
componentsModule.component('articleList', ArticleList);

import TweetsList from './tweets-helpers/tweets-list.component';
componentsModule.component('tweetsList', TweetsList);

import EditorTweets from './tweets-helpers/editorTweets.component';
componentsModule.component('editorTweets', EditorTweets);

import HomeSlider from './home/homeSlider.component';
componentsModule.component('homeSlider', HomeSlider);

import ReleasesDetails from './releases-helpers/releases-details.component';
componentsModule.component('releasesDetails', ReleasesDetails);

import ReleasesList from './releases-helpers/releases-list.component';
componentsModule.component('releasesList', ReleasesList);

import ListPagination from './article-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);

export default componentsModule;
