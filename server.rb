require 'webrick'

server = WEBrick::HTTPServer.new({
  :DocumentRoot => './',
  :BindAddress => '127.0.0.1',
  :Port => 3000,
  :MimeTypes => WEBrick::HTTPUtils::DefaultMimeTypes.merge({"js"=>"application/javascript"})
})

server.start
server.config[:MimeTypes]["js"] = "text/javascript"
