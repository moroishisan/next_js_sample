// 「テスト」を表示するだけのサンプルページ
// このページは、/sample というパスでアクセスできる

import React from 'react';
import { NextPage } from 'next';

const SamplePage: NextPage = () => {
  return (
    <div className={`flex flex-col items-center justify-center w-screen h-screen space-y-4`}>
      <h1 className={`text-6xl font-bold`}>Sample</h1>
    </div>
  );
}
export default SamplePage;
