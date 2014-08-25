require 'html/proofer'

task :test do
    sh 'mv ./_site/docs ./_docs' # Otherwise html-proofer will take too long.
    HTML::Proofer.new("./_site", {
        :href_ignore => [
            '#',
            /#.+/
        ],
        :ssl_verifypeer => false,
        :verbose => true
    }).run
    sh 'mv _docs ./_site/docs'
end
