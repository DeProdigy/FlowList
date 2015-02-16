function overlayTemplate() {
  return  " <div class='overlay'> " +
            " <span class='search-close'>&times;</span> " +
            " <form class='search-form'> " +
              " <input type='search' class='search-user-input' placeholder='Search for a song (i.e title, artist, genres, etc...)' autofocus> " +
              " <span class='search-underline'></span> " +
            " </form> " +
            " <div class='results-container'></div> " +
          " </div> ";
}