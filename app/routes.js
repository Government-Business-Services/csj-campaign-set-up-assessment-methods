//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



// Add your routes here


router.post('/ass-handle', function (req, res){
  var choice = req.session.data['select-assess']
  var exp = req.session.data['exp1']

  switch (choice) {
    case 'ability':
    res.redirect('ability')
    break

    case 'behaviours':
    res.redirect('behaviours')
    break

    case 'experience':
    res.redirect("experience")
    break

    case 'skills':
    res.redirect('technical')
    break

    case 'strengths':
    res.redirect('strengths')
    break
  }
})


// router.post('/list', function (req, res) {
//   var c = req.session.data['count'];
//
//   if (c = 1){
//     res.redirect('list?row2=true');
//   }
//
// })


router.post('/list-handler', function (req, res){
  var choice = req.session.data['another-assess']

  switch (choice) {
    case 'Yes':
    res.redirect('what-do-you-want-to-assess')
    break

    case 'No':
    res.redirect('task-list')
    break
  }
})
