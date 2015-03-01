// to depend on a bower installed component:
// define(['component/componentName/file'])

// define(['jquery', 'knockout'], function($, ko) {
//     var viewModel = {
//         status: ko.observable('active')
//     };
//     ko.applyBindings(viewModel, $('html')[0]);
// });


Parse.initialize("EohFLOiyiQ8bLZ1b4AKTksANagOxnKmKvTNWk9ny", "Ba9ZGY0yfK5tgrt27SJXwy6mTB4aS3LZFvN9QvrJ");


function ThingsViewModel(name, things) {
  var self = this;

  self.user = 'Bull City Dave';
  self.name = name;

  self.things = ko.observableArray(things);


  self.getName = function() {
    return self.name;
  };

  self.getInitTotal = function() {
    var total = 0;
    for (var i = 0; i < things.length; i++) {
      total += stuff.models[i].attributes.count;
    }
    return total;
  };

  // can probably get rid of this if stuff collection remains observable
    self.getLiveTotal = function() {
      var sum = 0;
      $.each($('.number input'), function(index, thing) {
         sum += parseInt($(thing).val());
      })
      return sum;
    };

  self.total = ko.computed(function() {
    if(isNaN(self.getLiveTotal())) {
      return self.getInitTotal();
    }
    else {
      return self.getLiveTotal();
    }
  });






  self.formatDate = function(date) {
    var month = ('0' + (date.getMonth() +1)).toString().slice(-2);
    var dayOfMonth = ('0' + date.getDate()).toString().slice(-2);
    var year = date.getFullYear();
    return (month + '-' + dayOfMonth + '-' + year);
  };

  self.getRemaining = function() {
    return (1000 - self.total());
  };

  self.remaining = self.getRemaining();


  self.insertRow = function() {
    /* first, the ugly way...nicer way later */
    var row ="<tr><td class='col-xs-5 col-sm-8 item' data-bind='event: { onblur: $parent.updateItem }'  readonly='false'></td><td class='col-xs-1 col-sm-1 number' readonly='false'></td><td class='col-xs-6 col-sm-3 date text-right' readonly='false'></td></tr>";
    var tbody = $('tbody:nth-of-type(2)');
    $(tbody).prepend(row);

  }

  /* put this into a KO event */
  $(document).on('click','.date', function (e) {
    var thingId = $(e.target).closest('tr').attr('data-thing-id');
    var count = parseInt($(e.target).closest('tr').find('.number input').val());
    var query = new Parse.Query('stuffEntry');
    query.get(thingId, {
      success: function(thing) {
        thing.set("count", count);
        thing.save();
        console.log('Count updated to ', count);
      },
      error: function(object, error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    })
  })



  self.sleep =
  function(milliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + milliseconds >= new Date().getTime()) {
    }
    console.log('done!');
  }

  self.updateItem = function(event) {
    console.log('thisworks');
  }

  self.edit = function() {
    $('tbody td input').removeAttr('readonly');
    $('table.item-listing').addClass('editable');
  }

  $('.btn.btn-edit').on('click', function (e) {
    $(this).hide();
    $('.btn-add').show();
     self.edit();
  })

  self.myText = ko.observable('');



  $('.btn.btn-add').on('click', function (e) {
     self.insertRow();
     $('td.item').first().focus();
    //  ko.applyBindings(self);
   })

/* why do i need the 2nd line? or even the first line? why doesn't total automatically update */
/* and as for remaining, i shouldn't have to do this */
   $(document).on("change", ".number input", function (e) {
     self.total = self.getLiveTotal();
     $('th[data-bind$=total]').html(self.total);
     self.remaining = (1000 - self.total);
     $('span[data-bind$=remaining]').html(self.remaining);
   })

};


// function ThingViewModel(thing) {
//   var self = this;
//
//   self.getAge = function() {
//     return self.age;
//   };
//
// };



          // function getStuff () {
  var stuffQuery = new Parse.Query("stuffEntry");
  stuffQuery.limit(1000);
  stuffQuery.descending('createdAt');
  var stuff = stuffQuery.collection();
  stuff.fetch({
    success: function(stuff) {

      // var thingsViewModel = new ThingsViewModel('January 2015 Stuff', stuff.models);
      thingsViewModel = new ThingsViewModel('January 2015 Stuff', stuff.models); // have available CLI
      ko.applyBindings(thingsViewModel);

    },
    error: function(stuff, error) {
      console.error(error);
    }
  });
        // }
        function sleep(milliseconds) {
          var currentTime = new Date().getTime();

          while (currentTime + milliseconds >= new Date().getTime()) {
          }
          console.log('done!');
        }


/* Focus to end of input */
/* http://stackoverflow.com/a/24635747/3705037 */

        (function($){
            $.fn.focusTextToEnd = function(){
                this.focus();
                var $thisVal = this.val();
                this.val('').val($thisVal);
                return this;
            }
        }(jQuery));

        /* */

        $(document).on("click", "input", function(e) {
          $(e.target).focusTextToEnd();
        })
