// todo tests
// - Confirm it exists and is a function
// - Getter
//   - Will return a boolean value
//   - Column hidden by `columns.visible` at init returns false
//   - Column not hidden by `columns.visible` at init returns true
//   - Column hidden by API returns false
//   - Column hidden at init and then made visible returns true
// - Setter
//   - `false` will hide a column (check header, body and footer nodes)
//   - `true` will make a column visible (check header, body and footer nodes)
//   - Repeat the above with:
//     - `deferRender` and an Ajax sourced table
//     - A table with no footer
//     - A scrolling table with header and footer
//     - A scrolling table with no footer

describe( "columns- column().visible()", function() {
	dt.libs( {
		js:  [ 'jquery', 'datatables' ],
		css: [ 'datatables' ]
	} );

	describe("Check the defaults", function () {
		dt.html( 'basic' );
		it("Default should be null", function () {
				});

	});

});
