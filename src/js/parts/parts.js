export class Parts{

    init() {
        this.AccordionImgChange();
        this.ReadMoreReadLess();
    }

    AccordionImgChange(){
        $(document).ready(function() {
            $('.closet-header').on('click', function() {
                var newImage = $(this).data('image');
                $('.accordion-image img').attr('src', newImage);
            });
        });
    }

    ReadMoreReadLess(){
      $(document).ready(function () {
            var maxLength = 160;

            $('.description').each(function () {
                var fullText = $(this).text();

                if (fullText.length > maxLength) {
                    var shortText = fullText.substring(0, maxLength) + '...';

                    // Store both versions using jQuery's .data()
                    $(this)
                        .data('full-text', fullText)
                        .data('short-text', shortText)
                        .text(shortText);

                    // Show the corresponding read-more-toggle button
                    $(this).next('.read-more-toggle').text('Read more').show();
                } else {
                    $(this).next('.read-more-toggle').hide();
                }
            });

            // Toggle button click
            $('.read-more-toggle').on('click', function () {
                var $desc = $(this).prev('.description'); // Get the related description
                var isExpanded = $(this).text() === 'Read less';

                $desc.text(isExpanded ? $desc.data('short-text') : $desc.data('full-text'));
                $(this).text(isExpanded ? 'Read more' : 'Read less');
            });
        });
    }
}
