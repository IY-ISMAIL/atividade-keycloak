Vagrant.configure("2") do |config|
  config.vm.box = "centos/7" 
  config.vm.network "private_network", ip: "192.168.50.4"

  config.vm.provider "virtualbox" do |v|
    v.name = "vm_keycloak"
  end

  config.vm.provision "shell", inline: <<-SHELL
    sudo yum install -y yum-utils
    sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo -y
    sudo yum install docker-ce docker-ce-cli containerd.io -y
    sudo systemctl start docker 
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
  SHELL

  config.vm.provision "file", source: "./docker-compose.yml", destination: "/home/$USER/" 
  config.vm.provision "shell", inline: "sudo docker-compose up -d", run: "always"

end

