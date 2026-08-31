<?php
/** Theme setup and assets for AI Confluence 2026. */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function ai_confluence_events() {
    return array(
        array( 'title' => 'Humanity 2050', 'type' => 'PPT Competition', 'category' => 'creative', 'icon' => '▰', 'color' => '#7b20c4', 'topic' => 'The World We Will Inherit — Imagining Life, Society and Progress in 2050', 'description' => 'Build a thought-provoking presentation that imagines the opportunities, responsibilities and human values that will guide life in 2050.' ),
        array( 'title' => 'Impact Challenge', 'type' => 'Ideathon', 'category' => 'innovation', 'icon' => '✦', 'color' => '#1370ca', 'topic' => 'Ideas That Can Change Everyday Life', 'description' => 'Bring a practical idea to the table. Frame a real problem, propose an inclusive solution and show the impact it can make every day.' ),
        array( 'title' => 'Hackathon', 'type' => 'Build for Impact', 'category' => 'innovation', 'icon' => '</>', 'color' => '#e67b13', 'topic' => 'Build for a Better Tomorrow — Technology for Real-World Solutions', 'description' => 'Collaborate, prototype and build technology that responds to a genuine community or societal challenge.' ),
        array( 'title' => 'Website Designing', 'type' => 'Competition', 'category' => 'creative', 'icon' => '▣', 'color' => '#119568', 'topic' => 'Design the Digital Future', 'description' => 'Design an intuitive and meaningful web experience that makes a clear contribution to tomorrow’s digital world.' ),
        array( 'title' => 'Startup Pitch', 'type' => 'Competition', 'category' => 'innovation', 'icon' => '➤', 'color' => '#176dd5', 'topic' => 'The Next Big Idea — Innovation with Purpose', 'description' => 'Pitch a venture that pairs a bold idea with a purpose, a realistic path and the potential to make a difference.' ),
        array( 'title' => 'Drawing', 'type' => 'Competition', 'category' => 'creative', 'icon' => '◉', 'color' => '#d82478', 'topic' => 'When Humans Meet Machines', 'description' => 'Create an original visual interpretation of the encounter between human imagination and intelligent machines.' ),
        array( 'title' => 'Quiz', 'type' => 'Competition', 'category' => 'communication', 'icon' => '?', 'color' => '#ec5f14', 'topic' => 'Beyond the Classroom — Knowledge, Curiosity & Discovery', 'description' => 'Put your knowledge and quick thinking to the test in a lively, multidisciplinary quiz challenge.' ),
        array( 'title' => 'Debate', 'type' => 'Competition', 'category' => 'communication', 'icon' => '⚖', 'color' => '#6d25c1', 'topic' => 'Technology Is Changing Us Faster Than We Are Changing It', 'description' => 'Research, reason and present your point of view on one of the most urgent questions of the intelligent age.' ),
        array( 'title' => 'Digital Poster Making', 'type' => 'Competition', 'category' => 'creative', 'icon' => '✎', 'color' => '#0c9695', 'topic' => 'AI for Good: Solving One Real-World Problem Through Artificial Intelligence', 'description' => 'Make a compelling digital poster that communicates how AI can serve people, communities and the planet.' ),
        array( 'title' => 'Poetry', 'type' => 'Competition', 'category' => 'creative', 'icon' => '❧', 'color' => '#be175c', 'topic' => 'If an AI Could Feel: A Poem from the Mind of a Machine', 'description' => 'Write an original poem exploring feeling, consciousness and creativity from a machine’s imagined perspective.' ),
        array( 'title' => 'Essay', 'type' => 'Competition', 'category' => 'communication', 'icon' => '≡', 'color' => '#1c69b7', 'topic' => 'What Does It Mean to Be Human in the Modern World?', 'description' => 'Write a considered essay about human identity, values and connection in a rapidly changing world.' ),
        array( 'title' => 'Just A Minute', 'type' => 'Competition', 'category' => 'communication', 'icon' => '60', 'color' => '#e8880a', 'topic' => '60 Seconds in the Mind of an AI', 'description' => 'Take the stage for one minute and share a sharp, memorable and original perspective from an AI’s point of view.' ),
    );
}

function ai_confluence_enqueue_assets() {
    $theme = wp_get_theme();
    wp_enqueue_style( 'ai-confluence-style', get_stylesheet_uri(), array(), $theme->get( 'Version' ) );
    wp_enqueue_script( 'ai-confluence-app', get_template_directory_uri() . '/assets/js/confluence.js', array(), $theme->get( 'Version' ), true );
    wp_localize_script( 'ai-confluence-app', 'AIConfluence', array( 'events' => ai_confluence_events(), 'deadline' => '2026-09-02T23:59:00+05:30' ) );
}
add_action( 'wp_enqueue_scripts', 'ai_confluence_enqueue_assets' );

add_action( 'after_setup_theme', function() { add_theme_support( 'title-tag' ); } );
