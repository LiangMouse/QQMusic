import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom'; // ts中对路由进行类型限制

const Discover = lazy(() => import('@/views/discover'));
const Subscribe = lazy(() => import('@/views/subscribe'));
const Mine = lazy(() => import('@/views/mine'));
const Download = lazy(() => import('@/views/download'));

// 二级路由
import Recommend from '@/views/discover/c-pages/recommend';
import Ranking from '@/views/discover/c-pages/ranking';
import Album from '@/views/discover/c-pages/album';
import Artist from '@/views/discover/c-pages/artist';
import Songs from '@/views/discover/c-pages/songs';
import Radio from '@/views/discover/c-pages/radio';
import Mvlist from '@/views/discover/c-pages/mvlist';
import Albummall from '@/views/discover/c-pages/albummall';

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '',
        element: <Navigate to="recommend" />
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'songs',
        element: <Songs />
      },
      {
        path: 'radio',
        element: <Radio />
      },
      {
        path: 'mvlist',
        element: <Mvlist />
      },
      {
        path: 'albummall',
        element: <Albummall />
      },
      {
        path: 'artist',
        element: <Artist />
      },
      {
        path: 'album',
        element: <Album />
      }
    ]
  },
  {
    path: '/subscribe',
    element: <Subscribe />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  }
];

export default routes;
