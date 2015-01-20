(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/default-router'
		],
		function( DefaultRouter ) {

			describe('DefaultRouter Router', function () {

				it('should be an instance of DefaultRouter Router', function () {
					var default-router = new DefaultRouter();
					expect( default-router ).to.be.an.instanceof( DefaultRouter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );