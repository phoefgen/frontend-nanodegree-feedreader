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
      for (var feedURL of allFeeds) {
        expect(feedURL).toBeDefined();
        expect(feedURL.length).not.toBe(0);
      }
    });

    /* loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
    it('have names', function () {
      for (var feedName of allFeeds) {
        expect(feedName).toBeDefined();
        expect(feedName.length).not.toBe(0);
      }
    });
  });

  describe('The Menu', function () {
    /* Ensures the menu is in a sane state.
    */
    let menuClasses;

    beforeEach(function () {
      // Get the current classes assigned to the body
      menuClasses = $('body').attr('class');
    });

    const clickMenu = function () {
      $('.menu-icon-link').click();
      let currentState = $('body').attr('class');
      return currentState;
    };

    it('is hidden by default', function () {
      // Expected default behaviour is for the menu to be hidden at pageload
      expect(menuClasses.includes('menu-hidden')).toBe(true);

    });

    it('changes state on click', function () {
      /*ensures the menu changes
      * visibility when the menu icon is clicked.
      */

      // First click
      expect(clickMenu()).not.toBe(menuClasses);
      // Second click
      expect(clickMenu()).toBe(menuClasses);
    });

  });

  describe('Initial Entries', function (){

  });


  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */

}());
