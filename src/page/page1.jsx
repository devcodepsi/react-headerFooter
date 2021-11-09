import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';

function Page1() {
  return (
    <div>
      <Header headerTitle="page1" />
      <div class="contents">Page1</div>
      <Footer />
    </div>
  );
}

export default Page1;
