//
// For guida       nce on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here


  function showDiv(div){
    document.getElementById(div).style.display = 'block';
  }

  function hideDiv(div){
    document.getElementById(div).style.display = 'none';
  }

  var behavioursMethods = ['Application form','CV','Statement of suitability','Civil Service Judgement Test','Civil Service Management Judgement Test','Interview','Presentation','Written exercise'];
  var abilityMethods = ['Civil Service Verbal Test','Civil Service Numerical Test']
  var strengthsMethods = ['Interviews','Civil Service Work Strengths Test']
  var technicalMethods = ['Application form','CV','Interview','Technical presentation','Technical test(s)','Work sample(s) or portfolio'];
  var experienceMethods = ['Application form','CV','Interview','Statement of suitability'];

  var gradingBehaviours = ['Level 1 - AA and AO or equivalent','Level 2 – EO or equivalent','Level 3 – HEO and SEO or equivalent','Level 4 - Grade 7 and 6 or equivalent'];

})
