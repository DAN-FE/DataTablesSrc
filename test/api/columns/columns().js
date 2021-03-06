// todo tests
// Exists and is a function
// Will return an API instance
// - No arguments
//   - Will select all columns
//   - Hide a column - still selects all columns
// - Single argument - selector
//   - Can select all columns with '*'
//   - Can select a single column
//   - Can select a single column using an integer
//   - Can select a column based on the visible index
//     - With column index 1 hidden, select 0:visIdx and 1:visIdx (to get columns 0 and 2)
//     - With column index 1 hidden, select 0:visible and 1:visible (as above)
//   - Can select columns using `:name` selector
//   - Can select columns using jQuery selector:
//     - Class name
//     - Index
//     - :not selector
//   - Can select columns using cell header nodes
//   - Can select columns using a function
//     - Select column index 0
//     - Select columns with even indexes
//   - Can select using a jQuery instance that contains cell header nodes
//   - Can select using an array with combinations of the above (make these up as you go)
// - Single argument - modifier
//   - Select a single column with order: index and use `columns().data()` - ensure the data is in index order
//   - Select a single column with order: current and use `columns().data()` - ensure the data is in displayed order
//   - Select a single column with page: current and use `columns().data()` - ensure data given for only the current page and with the current order
//   - Apply a search to the table
//     - Select a single column with search: current and use `columns().data()` - ensure data given is the filtered data only
// - Two arguments - selector and modifier
//   - Can select two columns using indexes with `order: applied` - confirm data is in expected order
//   - Can select columns using a class selector and `page: current` confirm expected data
//   - Can select columns using nodes with `search: current` - confirm expected data


describe( 'columns- columns()', function() {
	var table;

	dt.libs( {
		js:  [ 'jquery', 'datatables' ],
		css: [ 'datatables' ]
	} );

	dt.html( 'basic' );

	it( 'jQuery selector with a comma is not split', function () {
		table = $('#example').DataTable();

		var cols = table.columns( ':first-child, :last-child' ).header().to$();

		expect( cols.length ).toBe( 2 );
		expect( cols.eq(0).text() ).toBe( 'Name' );
		expect( cols.eq(1).text() ).toBe( 'Salary' );
	} );

	it( 'jQuery selector with a comma is not split, with not selector', function () {
		var cols = table.columns( ':not(:first-child,:last-child)' ).header().to$();

		expect( cols.length ).toBe( 4 );
		expect( cols.eq(0).text() ).toBe( 'Position' );
		expect( cols.eq(1).text() ).toBe( 'Office' );
		expect( cols.eq(2).text() ).toBe( 'Age' );
		expect( cols.eq(3).text() ).toBe( 'Start date' );
	} );
} );
