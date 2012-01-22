/* command: echo
 * summary: 引数を文字列として返します。
 *   usage: echo hoge => "hoge"
 *          echo hoge hoge => "hoge hoge"
 *          echo "hoge hoge" => "hoge hoge"
 */
 
return params.join(" ");
