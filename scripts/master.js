/**
 * Plugin Name: 	Arashtad Tabs
 * Plugin URI:  	https://arashtad.com/
 * Description: 	Responsive tabs widget for WordPress, created by Arashtad Ltd.
 * Version:     	1.1
 * Author			Amin Shahrokhi
 * Author URL		http://shahrokhi.me
 * Author Email		support@arashtad.com
 * Creation Date	January 9, 2016
 * Copyright		Copyright (c) 2011 - 2016 Arashtad Ltd. All Rights Reserved.
 * license			GNU General Public License version 3 or later; see LICENSE.txt
**/

jQuery.noConflict();

jQuery(document).ready(function(){

	// Display the 1st tab content
	jQuery('.itab').each(function(){
		var itabID = jQuery(this).attr('id');
		jQuery(this).find('li.tab-button:first-child').addClass('active-tab-button');
		jQuery(this).find('article.tab-content:first-child').addClass('active-tab-content').show();

		// Reaction of clicking on each tab button
		jQuery('.itab#'+itabID+' li.tab-button').click(function(){

			if(jQuery(this).hasClass('active-tab-button'))
			{
				return;
			}
			else
			{
				jQuery('.itab#'+itabID+' li.tab-button').removeClass('active-tab-button');
				jQuery(this).addClass('active-tab-button');

				var activeTabNo = jQuery(this).attr('id').slice(11);
				var activeTabContent = 'tab_content_'+activeTabNo;
				jQuery('.itab#'+itabID+' article.tab-content').hide();
				jQuery('.itab#'+itabID+' article.tab-content#'+activeTabContent).fadeIn('fast');
			}
		});

	});

});
