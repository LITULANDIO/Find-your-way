const Formacion = require('../../../../models/formaciones')

module.exports = (req, res) => {
  const { user } = req
  Formacion.find()
    .then(formaciones => res.render('Allformaciones', { formaciones, user }))
    .catch(err => { throw err })
}
