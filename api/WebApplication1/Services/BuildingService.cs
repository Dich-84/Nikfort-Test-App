using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;
using Newtonsoft.Json;
using System.IO;

namespace WebApplication1.Services
{
    public interface IBuildingService
    {
        List<Building> GetAll();

        Building Get(string id);

    }
    public class BuildingService: ServiceBase, IBuildingService
    {
        private const string FilePath = @"\bin\Data\Buildings.json";

        private List<Building> _buildings;

        public BuildingService()
        {
            var savedData = ReadData();

            _buildings =
                savedData != null
                ? savedData
                : new List<Building>();
        }

        public Building Get(string id)
        {
            return _buildings.FirstOrDefault(x => x.nf_buildingid == id);
        }

        public List<Building> GetAll()
        {
            return _buildings;
        }

        private List<Building> ReadData()
        {
            var data = File.ReadAllText(GetStoragePath(FilePath));

            return JsonConvert.DeserializeObject<List<Building>>(data);
        }
    }
}