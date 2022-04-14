import React from 'react';
import './FAQ.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function FAQ(){
  return(
    <>
    <Navbar />
    <div class="faq--all">

      <div class="faq">
        <p class="faq--title">How can we help you?</p>
        <p class="faq--ques">How to fill the Bug Report Form accurately? and ensure that my report doesn't automatically gets flushes by filters at backend?</p>
        <p class="faq--ans">We always promote our custmers to try out the max level of accurancy from their side and fill all the form
          to the best of your knowledge, for further information in the same regards please visit the <a href="#">Report Writing Guide.</a></p>
        <p class="faq--ques">How long does it takes to get a bug being patched</p>
        <p class="faq--ans">The time it might take for the bug to get patched will depend directly on the fact that they details linked to bug report</p>
        <p class="faq--ques">What if I Report a bug that's already been reported?</p>
        <p class="faq--ans">If the bug you are logging/raising is already a part of the queue, it's not a thing to worry for your side,
          we at isThis-a-Bug promote our users to raise a bug report without any secound thought so be relaxed and keep reporting and
          helping us imporove the experience for all 👍</p>
        <button type="button" onclick="window.location.href='../MainPageForm/index.html'" class="faq-button-last">Go to Bug Report Page</button>
      </div>

    </div>

    <Footer />

    </>
  )
}
