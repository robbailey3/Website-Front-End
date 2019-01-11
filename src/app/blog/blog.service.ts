import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}
  getAllPosts() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          response: {
            status: 'ok',
            statusCode: 200,
            timestamp: 1547215164,
            total: 6,
            results: [
              {
                id: '95',
                title: 'Why Click Bait Annoys Me',
                content: '<p>Test Post</p>',
                description: 'A bit of irony',
                date: '2018-09-27 17:26:24',
                status: '0',
                ttr: 1,
                slug: 'why-click-bait-annoys-me',
                categories: 'Opinion',
                headerImage: null
              },
              {
                id: '94',
                title: 'Why Science Deniers Annoy Me',
                content: '<p>Today, there seems to be&nbsp;</p>',
                description:
                  'These days, there seems to be a lot of science denial around, and that annoys me.',
                date: '2018-09-27 17:24:58',
                status: '0',
                ttr: 1,
                slug: 'why-science-deniers-annoy-me',
                categories: 'Science,Physics,Opinion',
                headerImage: '/../../photos/blogHeaders/flatEarth.png'
              },
              {
                id: '91',
                title: 'A Beginners Guide to Web Development: Part Two - CSS',
                content:
                  '<p>Hopefully, you have read my previous post about HTML, or you already know a fair bit of HTML. Now we are going to look at CSS; the language that makes the web look interesting.&nbsp;</p>',
                description:
                  'Part two of my beginners guide to Web Development, this time covering CSS.',
                date: '2018-09-07 09:07:14',
                status: '0',
                ttr: 1,
                slug: 'a-beginners-guide-to-web-development-part-two-css',
                categories: 'HTML,Web Development,CSS,Web Dev,Coding',
                headerImage: null
              },
              {
                id: '90',
                title: 'A Beginners Guide to Web Development: Part One - HTML',
                content:
                  '<p>This post is the first in a series of posts I will be doing with a guide to web development. In these posts, I will try not to assume any prior knowledge of web development. I will assume that you know how to get onto a webpage, otherwise you wouldn\'t be here, but I don\'t&nbsp;expect you to have any coding experience.</p>\n<h2>What is a webpage?</h2>\n<p>When you navigate to a webpage (for example&nbsp;<a title="My Homepage" href="../" target="_blank" rel="noopener">https://robbailey3.co.uk</a>), you are, essentially, viewing a file on another computer, or server. In the example of my homepage, you are accessing a file called \'index.html\' (where the name of the file is \'index\' and the type of file is \'HTML\'). Your browser loads this file, looks at it and reads its contents. The browser then interprets this file and produces the pretty webpage which you see.&nbsp;</p>\n<p>Web pages are always loaded in HTML, CSS and JavaScript as these are the only languages which browsers can understand. Other languages such as PHP, C#, Java or Python can be used to write web pages but ultimately, they are just used to produce HTML. I won\'t be going into those other languages in this post (I might deal with some of them in other posts), this post is solely for HTML.&nbsp;</p>\n<h2>So, what is HTML?</h2>\n<p>HTML stands for \'<strong>H</strong>yper <strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage\' and as I mentioned above, this is the language which web pages are made of. HTML defines the content and structure of the page. For example, the most basic webpage may look like:</p>\n<pre class="prettyprint">&lt;html&gt;<br />  &lt;head&gt;<br />    &lt;title&gt;Hello World&lt;/title&gt;<br />  &lt;/head&gt;<br />  &lt;body&gt;<br />    &lt;h1&gt;Hello World&lt;/h1&gt;<br />    &lt;p&gt;This is a webpage&lt;/p&gt;<br />  &lt;/body&gt;<br />&lt;/html&gt;</pre>\n<p class="prettyprint">This will produce a very boring looking webpage which looks like:</p>\n<p><img src="../photos/blogPhotos/HelloWorld.png" alt="A very basic webpage" width="100%" /></p>\n<p>Which, I\'m sure you will agree isn\'t particularly exciting, but it\'s a start.&nbsp;</p>\n<p>In the above example, you will see that several words are within &lt; and &gt; signs. These words are referred to as&nbsp;<strong>tags</strong>. Most tags must have an opening and a closing tag (a closing tag contains a forward slash), an example of which would be the <code>&lt;html&gt;</code>&nbsp;tag in the example. The opening tag is the first tag and the closing tag (<code>&lt;/html&gt;</code>) is found at the very end, all the content is within&nbsp;this tag. The HTML tag tells the browser that this is a HTML page. The second tag is the&nbsp;<code>&lt;head&gt;</code>&nbsp;tag. Tags often contain things referred to as \'attributes\'. These are used to specify a property of the tag. An example would be:&nbsp;</p>\n<pre class="prettyprint">&lt;img src="https://images.co.uk/dog.jpg" width="100px" alt="A Dog"&gt;</pre>\n<p>The above example contains three attributes: \'src\', \'width\' and \'alt\'. Attributes can use either speech marks (") or quotation marks (\'), just make sure it is consistent.&nbsp;</p>\n<h2>The<code>&nbsp;&lt;head&gt;</code> tag</h2>\n<p>The head tag contains information about the webpage such as the title and metadata, it can also contain references to stylesheets (more on these in part two) and JavaScript files. The information contained within the head tag is not rendered on the page and, therefore, is not displayed to the user of the webpage.&nbsp;An example of a fairly basic head tag is given below:</p>\n<pre class="prettyprint">&lt;head&gt;<br />&lt;meta charset="utf-8"&gt;<br />&lt;title&gt;Robert Bailey - Front-End Engineer&lt;/title&gt;<br />&lt;base href="/"&gt;<br />&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;<br />&lt;link rel="icon" type="image/png" href="./assets/favicon.png" sizes="16x16"&gt;<br />&lt;link rel="icon" type="image/png" href="./assets/favicon@2x.png" sizes="32x32"&gt;<br />&lt;link rel="icon" type="image/png" href="./assets/favicon@3x.png" sizes="48x48"&gt;<br />&lt;link rel="icon" type="image/png" href="./assets/favicon@4x.png" sizes="64x64"&gt;<br />&lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;<br />&lt;script src="https://cdn.lightwidget.com/widgets/lightwidget.js"&gt;&lt;/script&gt;<br />&lt;link rel="stylesheet" href="styles.dfe39f461a6df6a1a572.css"&gt;<br />&lt;/head&gt;</pre>\n<p>Let\'s go through these tags one by one:</p>\n<p>&nbsp;</p>\n<p><code>&lt;meta charset="</code>utf<code>-8"&gt;</code>&nbsp;- This tells the browser what set of characters to be expected. In this case, it tells the browser that the \'UTF-8\' set is to be used. This is the most common set.</p>\n<p>&nbsp;</p>\n<p><code>&lt;title&gt;Robert Bailey - Front-End Engineer&lt;/title&gt;</code>&nbsp;- This tells the browser what the title of the page is. The title of the page appears in the tab and when you save the page as a bookmark.&nbsp;</p>\n<p>&nbsp;</p>\n<p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> - This is a very important tag if you want your webpage to be mobile friendly. Since a large proportion of people using the internet are using a mobile phone, you will want to include this. In essence, it is telling the webpage to load the page at width of the device and at 1x zoom. There is a vast range of different \'meta\' tags which can be used (their type being determined by the \'name="..."\' part of the tag.</p>\n<p>&nbsp;</p>\n<p><code>&lt;link rel="icon" type="image/png" href="./assets/favicon.png" sizes="16x16"&gt;</code>&nbsp;- This \'link\' tag tells the browser that it needs to load a resource of some kind. In this case, an icon file is needed, as determined by the rel="..." part of the tag. The next three similar looking tags are pointing to icons of different sizes. This is so that a different sized icon can be loaded depending on what size is needed.&nbsp;</p>\n<p>&nbsp;</p>\n<p><code>&lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;</code>&nbsp;- Similarly to the above, this tag is telling the browser to load a \'stylesheet\'. Stylesheets are used to alter the way a webpage looks and are written in a language called CSS (<strong>c</strong>ascading <strong>s</strong>tyle <strong>s</strong>heets)</p>\n<p>&nbsp;</p>\n<p><code>&lt;script src="https://cdn.lightwidget.com/widgets/lightwidget.js"&gt;&lt;/script&gt;</code>&nbsp;- This is an example of a script tag. Script tags are used to include JavaScript in the webpage. There are two distinct ways of implementing a script tag. In this case, the tag contains \'src="..."\' which tells the browser that it needs to load the JavaScript resource from somewhere. The other way of including JavaScript involves writing the code within the tag (i.e. between <code>&lt;script&gt;</code> and <code>&lt;/script&gt;</code>.</p>\n<p><br />In summary, the stuff included in the <code>&lt;head&gt;</code>&nbsp;tag is used to tell the browser what the page is and what else it needs to load.&nbsp;</p>\n<h2>The <code>&lt;body&gt;</code> tag</h2>\n<p>The <code>&lt;body&gt;</code>&nbsp;tag of your HTML file is where the main content of the page is contained. There is a huge array of different tags which can be used to create the main content of a webpage and it would be highly impractical and monotonous for me to go through them all. I will, however, go through some of the main ones:</p>\n<p>&nbsp;</p>\n<p><code>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;</code> - These are the headings. These work similarly to how you would format a document in Microsoft Word. <code>&lt;h1&gt;</code>&nbsp;refers to the first level of heading and is usually used for the main heading or title of the page.</p>\n<p>&nbsp;</p>\n<p><code>&lt;p&gt;</code>&nbsp;- A p tag (or \'paragraph\' tag) is used for the main body of text within a document.&nbsp;</p>\n<p>&nbsp;</p>\n<p><code>&lt;a&gt;</code>&nbsp;- An \'a\' tag is most commonly used for links. This is achieved by using the attribute \'href\', for example:&nbsp;<code>&lt;a href="https://example.com"&gt;Example Link&lt;/a&gt;</code>. This would render on the page as a link to \'https://example.com\' and would display the text \'Example Link\'.</p>\n<p>&nbsp;</p>\n<p><code>&lt;img&gt;</code>&nbsp;- This, as the name suggests, is an image tag. The image tag must contain a \'src\' attribute which determines where the image is located. An \'alt\' tag should also be included so that some text is displayed in the event of the image not loading, or for visually impaired users using a screen reader.&nbsp;</p>\n<p>&nbsp;</p>\n<p><code>&lt;ul&gt;</code>&nbsp;- \'ul\' stands for unordered list. By default, this renders in the browser as a list using bullet points. Each list element should be contained within a&nbsp;<code>&lt;li&gt;</code>&nbsp;tag.</p>\n<p>&nbsp;</p>\n<p><code>&lt;ol&gt;</code>&nbsp;- \'ol\' is very similar to a \'ul\' element. However, \'ol\' (ordered list) uses numbers rather than bullet points. Again, each list element should be contained within a&nbsp;<code>&lt;li&gt;</code>&nbsp;tag.</p>\n<p>&nbsp;</p>\n<p><code>&lt;div&gt;</code>&nbsp;- A \'div\' tag is used commonly used as a division within a HTML document. They are useful for defining different sections of the page.&nbsp;</p>\n<p>&nbsp;</p>\n<p>Since the release of the latest version of HTML (version 5), there are now elements known as \'semantic elements\'. These are tags which clearly conveys their intended use or structure. Examples of these include <code>&lt;article&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;section&gt;</code> and <code>&lt;nav&gt;</code>.</p>\n<p>&nbsp;</p>\n<h2>In Summary</h2>\n<p>Overall, HTML is a very simple and easy language to use. However, without CSS and JavaScript (posts coming soon), webpages would be very dull and plain. Using the above content, you should be able to produce a simple webpage.</p>\n<p>&nbsp;</p>',
                description:
                  'Part one of a series of posts with a guide to web development for absolute beginners.',
                date: '2018-08-28 11:40:48',
                status: '1',
                ttr: 10,
                slug: 'a-beginners-guide-to-web-development-part-one-html',
                categories: 'Web Development,HTML,CSS,Web Dev,Development',
                headerImage: null
              },
              {
                id: '85',
                title: 'Future projects',
                content:
                  '<p>I know it may seem like I hardly ever write on here... and that\'s because I don\'t. Blogging doesn\'t really seem to be my thing. I spend more time working on the code than writing about it, which, in all honesty is completely the opposite of what I see some newbie developers doing.&nbsp;</p>\n<p>I am working on a few things on here. Firstly, there is the style guide. I have seen a few style guides by a variety of companies ranging from airbnb to IBM (couldn\'t think of a company beginning with \'Z\') and I think they\'re a great idea and a way of maintaining a consistent style. So for me, it will be handy to define definite ways of doing things, and sticking to it. The SCSS is broken apart into different components, so that\'s a start. I just need to make it all a bit more consistent and think of a way to show it off. I\'ve also decided that the use of camelCase is utterly stupid for class names and item IDs thanks to some article I read recent.&nbsp;</p>\n<p>Another project which I am going to work on is a beer database thing. I want to work with some data, why shouldn\'t it be beer? I don\'t know where I\'m going to get this data from, I may rely on you as I don\'t think there is an API I can plug into to fetch information on beer. I\'m thinking I can get information on breweries and their associated beers (including pictures, reviews and beery info).</p>\n<p>If anyone else has any ideas for any projects I can build into this site, please do let me know .</p>\n<p><strong>Edit:</strong>&nbsp;I\'m also going to think of a better interface for the blog pages (it\'s built in pure PHP rather than Angular for SEO).&nbsp;</p>',
                description: 'A (very) quick update on this site',
                date: '2018-02-07 18:31:26',
                status: '1',
                ttr: 2,
                slug: 'future-projects',
                categories: 'Projects,SCSS,Code',
                headerImage: null
              },
              {
                id: '82',
                title: 'A fresh start',
                content:
                  '<p>Content to come soon! (or not so soon, as the case may be)</p>',
                description: 'It\'s time for a fresh start',
                date: '2018-01-07 20:54:32',
                status: '1',
                ttr: 1,
                slug: 'a-fresh-start',
                categories: 'Miscellaneous',
                headerImage: null
              }
            ]
          }
        });
      }, 500);
    });
  }
}
