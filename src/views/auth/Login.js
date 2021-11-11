import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0'>
              <div className='rounded-t mb-0 px-2 py-2'>
                <div className='flex grid content-center items-center justify-center '>
                  <img
                    alt='...'
                    className='w-full h-full mr-1'
                    src={require('assets/img/bg2.png').default}
                  />
                </div>
                <hr className='mt-6 border-b-1 border-blueGray-300' />
              </div>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <div className='flex text-black mb-3 font-bold'>
                  <div>Version: &nbsp;</div>
                  <label class='switch'>
                    <input type='checkbox' id='togBtn' />
                    <div class='slider round'>
                      <span class='on'>Alumons</span>
                      <span class='off'>Prueba</span>
                    </div>
                  </label>
                </div>
                <form>
                  <div className='relative w-full mb-3'>
                    <div class='relative flex w-full flex-wrap items-stretch mb-3'>
                      <span class='z-10 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
                        <i class='fas fa-user'></i>
                      </span>
                      <input
                        type='text'
                        placeholder='Email'
                        class='px-3 py-3 placeholder-blueGray-800 text-blueGray-600 relative bg-input rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10'
                      />
                    </div>
                  </div>

                  <div className='relative w-full mb-3'>
                    {/* <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Password
                    </label> */}
                    <div class='relative flex w-full flex-wrap items-stretch mb-3'>
                      <span class='z-10 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3'>
                        <i class='fas fa-phone'></i>
                      </span>
                      <input
                        type='text'
                        placeholder='Telefono'
                        className='px-3 py-3 placeholder-blueGray-800 text-blueGray-600 relative bg-input rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10'
                      />
                    </div>
                  </div>

                  <div className='text-center'>
                    <button
                      className='text-white  text-sm font-bold uppercase px-6 py-3  outline-none focus:outline-none  '
                      type='button'
                    >
                      <img
                        alt='...'
                        className='w-full h-full mr-1'
                        src={require('assets/img/Entrar.png').default}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 relative'>
              <div className='w-1/2'>
                <a
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                  className='text-black'
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className='w-1/2 text-right'>
                <Link to='' className='text-black'>
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
