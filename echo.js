/* command: echo
 * summary: 渡された引数をそのまま文字列として返します
 *   usage: echo hoge        # => "hoge"
 *          echo hoge hoge   # => "hoge hoge"
 *          echo "hoge hoge" # => "hoge hoge"
 */

return params.join(" ");
