<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<div class="post-cover">

<div class="format-box">
<i class="icon-music"></i>
</div>

	<header class="entry-header">
		<h2 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'لینک مستقیم به %s', '_s' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
	</header><!-- .entry-header -->


	<div class="entry-content">
	
	<div class="media-box">
		<?php $audio = SmartMetaBox::get('audio_url'); ?>
		<div id="mediaspace-<?php the_ID(); ?>"><?php echo $audio; ?></div>
 		<script type='text/javascript'>
			jwplayer('mediaspace-<?php the_ID(); ?>').setup({
			'flashplayer': '<?php echo get_template_directory_uri(); ?>/lib/player.swf',
			'file': '<?php echo $audio; ?>',
			'backcolor': '111111',
			'frontcolor': 'cccccc',
			'lightcolor': '66cc00',
			'playlistsize': '200',
			'skin': '<?php echo get_template_directory_uri(); ?>/lib/stylish_slim.swf',
			'playlist': 'bottom',
			'controlbar': 'bottom',
			'width': '540',
			'height': '32'
			});
		</script>
	</div>
	
		<?php the_content( __( 'ادامه <span class="meta-nav">&larr;</span>', '_s' ) ); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'صفحه:', '_s' ), 'after' => '</div>' ) ); ?>
	
	</div><!-- .entry-content -->


	<footer class="entry-meta">
		<span class="clock"> <i class="icon-time"></i><abbr title="<?php the_time('نوشته شده در j F Y؛ ساعت g:i a');?>"> <?php days_ago(); ?></abbr></span>
		<span class="comments-link"> <i class="icon-comment"></i>  <?php comments_popup_link( __( 'نظر شما چيست؟', '_s' ), __( 'يک ديدگاه', '_s' ), __( '% ديدگاه', '_s' ) ); ?></span>
		<span class="perml"> <i class="icon-bolt"></i> <a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'فقط درباره %s بخوانید', '_s' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">لینک مستقیم</a></span>

	</footer><!-- #entry-meta -->
	
</div>	

</article><!-- #post-<?php the_ID(); ?> -->