import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import Navbar from 'components/Navbars/IndexNavbar.js';
import FooterSmall from 'components/Footers/FooterSmall.js';

// views

import Login from 'views/auth/Login.js';
import Register from 'views/auth/Register.js';

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className='relative w-full h-full py-20 min-h-screen'>
          <div
            className='absolute top-0 w-full h-full bg-white-800 bg-no-repeat bg-full bg-fixed'
            style={{
              backgroundImage:
                'url(' + require('assets/img/bottom.png').default + ')',
            }}
          ></div>
          <Switch>
            <Route path='' exact component={Login} />
            <Route path='/auth/register' exact component={Register} />
            <Redirect from='/auth' to='/auth/login' />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
