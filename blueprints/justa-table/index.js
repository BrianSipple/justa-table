/*jshint node:true*/
module.exports = {
  description: 'install justa-table into a project',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('jquery.floatThead', '^1.3.2');
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
