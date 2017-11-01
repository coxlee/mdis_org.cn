<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'liangcang@620');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?eLY (>1D+Ji1S[UBzh~jUQY_*Iz$qsSZC7%/`1&r#1Rcw^SHL}E@jQ8DL+J*1Pi');
define('SECURE_AUTH_KEY',  '/T@tbWPE0vY_i 93;qLl|m,/+FRu p1k90#i3q/Z+0D0nNF|qf(%&;N{HQ)Qxk-N');
define('LOGGED_IN_KEY',    'lx}!Kg.MP&$rsk]k0I_9UvQ|Vhnf*(AUqpqq=[HkzUa!&{n5Tsh}dAATiwW9.$:h');
define('NONCE_KEY',        'thJGx;QMV+Z)G?G:+R,~EGusI9Qpxt6i7.Z Ffpm^7#9g>pm<YgYaWx$%0t|7Ie(');
define('AUTH_SALT',        '~@ f1DyPqV>!u},ky ]G`Jdvf*8-]z6Qo$wi:8$kZw]IJ(E7],~9tT>.&EY/.*$a');
define('SECURE_AUTH_SALT', 'D xZ[k@ JGS_aPAyG2> /DOVoNM>/(rtTf!<JY]O*lz*Jn36|IyYK}ECn({XSm?]');
define('LOGGED_IN_SALT',   'kd2d2bHvL4<t-3b9Ii5b8=C)|&7%D7Jxfq<A9pZ7Ya5qQfdA~el/;-}RP 3^%coJ');
define('NONCE_SALT',       '4w9^pLq+k{kBp&rN#b+Z3u7ypzeB./?eHKT`mF1t#K+.o&K8O6bSTF@.9J_.r=%t');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
