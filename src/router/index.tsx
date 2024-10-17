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
import Djradio from '@/views/discover/c-pages/djradio';
import Artist from '@/views/discover/c-pages/artist';
import Songs from '@/views/discover/c-pages/songs';

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: 'discover',
        element: <Navigate to="discover/recommend" />
      },
      {
        path: 'discover/recommend',
        element: <Recommend />
      },
      {
        path: 'discover/ranking',
        element: <Ranking />
      },
      {
        path: 'discover/songs',
        element: <Songs />
      },
      {
        path: 'discover/djradio',
        element: <Djradio />
      },
      {
        path: 'discover/artist',
        element: <Artist />
      },
      {
        path: 'discover/album',
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
