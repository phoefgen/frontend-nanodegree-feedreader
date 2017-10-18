/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function () {
    /*  Ensure the RSS feeds object is in a sane state
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('have URLs', function () {
      /* loops through each feed
      * in the allFeeds object and ensures it has a URL defined
      * and that the URL is not empty.
      */
      for (var feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    /* loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
    it('have names', function () {
      for (var feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  describe('The Menu', function () {
    /* Ensures the menu is in a sane state.
    */

    const clickMenu = function () {
      $('.menu-icon-link').click();
    };

    it('is hidden by default', function () {
      // Expected default behaviour is for the menu to be hidden at pageload
      expect($('body').hasClass('menu-hidden')).toBeTruthy();

    });

    it('changes state on click', function () {
      /*ensures the menu changes
      * visibility when the menu icon is clicked.
      */

      // First click
      clickMenu();
      expect($('body').hasClass('menu-hidden')).toBeFalsy();
      // Second click
      clickMenu();
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });
  });

  describe('Initial Entries', function () {
    /* Ensure that when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    */

    beforeEach(function (done) {
      loadFeed(0, done);
    });

    // Check for entries.
    it('have items', function () {
      // Select entry elements, with a feed ancestor
      let numItems = $('.feed .entry').length;
      expect(numItems).not.toBe(0);
    });

  });

  describe('New Feed Selection', function () {
    /*ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    let newFeed,
        oldFeed;

    beforeEach(function (done) {

      // Remove content from feed.
      $('.feed').text('');

      // Pull explicit feed (the first one);
      loadFeed(0, function (){
        oldFeed = $('.feed').text();
      });

      // Re-add content to feed (different to the default of Index0)
      loadFeed(1, function () {
        // Collects the last feed in the list of feeds.
        newFeed = $('.feed').text();
        done();
      });
    });

    // Check for changing content.
    it('updates content', function () {
      if (allFeeds.length < 2) {
        console.log(allFeeds.length);
        // There are insufficient feeds to test this functionality.
        pending();
      }
      expect(newFeed).not.toBe(oldFeed);
    });
  });
}());
